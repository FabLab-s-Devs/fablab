"use server";
import ReservationConfirmationEmail from "@/components/resend/confirmationTemplate";
import { format } from "date-fns";
import { Resend } from "resend";

export async function sendConfirmation({ email, date, period }: any) {
    const resend = new Resend(process.env.RESEND_API_KEY);
	const periodsMap = {
		"1": "09:00 - 12:00",
		"2": "12:00 - 15:00",
		"3": "15:00 - 18:00",
		"4": "18:00 - 21:00",
	};
    const content = `
	<!DOCTYPE html>
	<html>
		<head>
			<title>Confirmation de Réservation</title>
			<style>
				body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
				.container { width: 80%; margin: auto; padding: 20px; background-color: #f7f7f7; border: 1px solid #dcdcdc; border-radius: 8px; }
				h1 { color: #4CAF50; }
				p { margin-bottom: 10px; }
			</style>
		</head>
		<body>
			<div class="container">
				<h1>Confirmation de Réservation</h1>
				<p>Bonjour,</p>
				<p>Merci pour votre réservation. Voici les détails de votre réservation :</p>
				<p><strong>Date :</strong>${format(date, "PPP")}</p>
				<p><strong>Période :</strong>${periodsMap[period]}</p>
				<p>Si vous avez des questions, n'hésitez pas à nous contacter à tout moment.</p>
				<p>Merci,<br>Fablab Universiapolis</p>
				<p><strong>PS :</strong> N'oubliez pas votre réservation car toute absence sera déduite de vos notes. Pour annuler, veuillez contacter <a href="mailto:ayoub.moufid@e-polytechnique.ma">ayoub.moufid@e-polytechnique.ma</a>.</p>
			</div>
		</body>
	</html>
	`;
    const { data } = await resend.emails.send({
        from: "Fablab <onboarding@resend.dev>",
        to: [email],
        subject: "Confirmation de Réservation",
        html: content,
    });

    console.log(data);
}
