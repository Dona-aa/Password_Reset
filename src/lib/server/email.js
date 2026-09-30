import nodemailer from 'nodemailer';
import { SMTP_USER, SMTP_PASS } from '$env/static/private';

// Connection to SMTP2GO.
export const transporter = nodemailer.createTransport({
	host: 'mail.smtp2go.com',
	port: 2525,
	secure: false,
	auth: {
		user: SMTP_USER,
		pass: SMTP_PASS
	}
});