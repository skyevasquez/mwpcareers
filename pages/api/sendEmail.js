import formidable from 'formidable';
import emailjs from 'emailjs-com';
import fs from 'fs';

// Configure Next.js to handle file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Parse form with formidable
    const form = new formidable.IncomingForm();
    form.keepExtensions = true;
    
    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve([fields, files]);
      });
    });

    // Validate required fields
    if (!fields.position || !fields.location || !fields.firstName || 
        !fields.lastName || !fields.email || !fields.phone) {
      return res.status(400).json({ error: 'Required fields are missing' });
    }

    // Handle resume file if it exists
    let resumeAttachment = null;
    if (files.resume) {
      // Read file as base64 for attachment
      const fileContent = fs.readFileSync(files.resume.filepath);
      resumeAttachment = {
        content: fileContent.toString('base64'),
        name: files.resume.originalFilename,
      };
    }

    // EmailJS integration
    const templateParams = {
      position: fields.position,
      location: fields.location,
      firstName: fields.firstName,
      lastName: fields.lastName,
      email: fields.email,
      phone: fields.phone,
      additionalDetails: fields.additionalDetails || 'None provided',
      resumeFileName: files.resume ? files.resume.originalFilename : 'No resume provided'
    };

    // Get these from your EmailJS account
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const userId = process.env.EMAILJS_USER_ID;

    if (!serviceId || !templateId || !userId) {
      console.error('EmailJS configuration missing');
      return res.status(500).json({ error: 'Email service configuration error' });
    }

    // Send email with EmailJS
    await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      userId
    );

    // If we have a resume, we'd need to handle it separately
    // EmailJS doesn't support file attachments directly
    // You might want to use a different email service or
    // upload the file to cloud storage and include a link

    return res.status(200).json({ message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Error submitting application:', error);
    return res.status(500).json({ error: 'Failed to submit application' });
  }
} 