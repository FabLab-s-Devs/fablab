"use server";
import { format } from "date-fns";
import { Resend } from "resend";

interface ConfirmationParams {
    email: string;
    date: Date;
    period: keyof typeof periodsMap;
}

const periodsMap = {
    "1": "09:00 - 12:00",
    "2": "12:00 - 15:00",
    "3": "15:00 - 18:00",
    "4": "18:00 - 21:00",
} as const;

export async function sendConfirmation({
    email,
    date,
    period,
}: ConfirmationParams) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const periodTime = periodsMap[period] || periodsMap["1"];
    const content = `
   <!DOCTYPE html>
	<html>
		<head>
			<title>Confirmation de Réservation</title>
			<style>
				body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
				.container { width: 80%; margin: auto; padding: 20px; background-color: #f7f7f7; border: 1px solid #dcdcdc; border-radius: 8px; }
				h1, h2 { color: #4CAF50; }
				p { margin-bottom: 10px; }
				ul { padding-left: 20px; }
				li { margin-bottom: 10px; }
			</style>
		</head>
		<body>
			<div class="container">
				<h1>Confirmation de Réservation</h1>
				<p>Bonjour,</p>
				<p>Merci pour votre réservation. Voici les détails de votre réservation :</p>
				<p><strong>Date :</strong>${format(date, "PPP")}</p>
				<p><strong>Période :</strong>${periodTime}</p>
				<h2>Règles d'utilisation</h2>
				<ul>
					<li>Après utilisation, veuillez réarranger les chaises et remettre tout en place ; le non-respect de cette règle entraînera une interdiction de futures réservations et le chef d'équipe sera tenu responsable.</li>
					<li>Le respect des membres du personnel du FabLab est impératif.</li>
					<li>L'utilisation des machines sans le consentement ou l'autorisation d'un de nos membres du personnel est strictement interdite.</li>
				</ul>
				<p>Si vous avez des questions, n'hésitez pas à nous contacter à tout moment.</p>
				<p>Merci,<br>Fablab Universiapolis</p>
				<p><strong>PS :</strong> N'oubliez pas votre réservation car toute absence sera déduite de vos notes. Pour annuler, veuillez contacter <a href="mailto:fablab@e-polytechnique.ma">fablab@e-polytechnique.ma</a>.</p>
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
