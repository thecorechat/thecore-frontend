import HeaderBack from "../../ui/HeaderBack/HeaderBack";
import {
	TermsOfServiceContainer,
	TermsTextItem,
	TermsTitle,
} from "./TermsOfService.styled";

const TermsOfService = ({ isOpen, onClose }) => {
	return (
		<TermsOfServiceContainer $open={isOpen}>
			<HeaderBack onClick={onClose} />
			<TermsTitle>Terms Of Service</TermsTitle>

			<ul>
				<TermsTextItem>
					<h3>1. Acceptance of Terms</h3>
					<p>
						By accessing or using The Core - School Chat ("the App"), you agree
						to be bound by these Terms and Conditions. If you do not agree, do
						not use the App.
					</p>
				</TermsTextItem>
				<TermsTextItem>
					<h3>2. User Eligibility</h3>
					<p>
						The App is intended for use by students, teachers, and staff in a
						school setting. Users under the age of 13 (or applicable age) must
						have parental consent.
					</p>
				</TermsTextItem>
				<TermsTextItem>
					<h3>3. User Accounts</h3>
					<p>
						You are responsible for maintaining the confidentiality of your
						account and password. You agree to provide accurate registration
						information: email, first name, and last name.
					</p>
				</TermsTextItem>
				<TermsTextItem>
					<h3>4. User Conduct</h3>
					<p>
						You agree not to: <br /> • Post inappropriate, harmful, or illegal
						content <br /> • Harass or bully other users <br /> • Impersonate
						others <br /> • Attempt to hack or disrupt the service
					</p>
				</TermsTextItem>
				<TermsTextItem>
					<h3>5. Intellectual Property</h3>
					<p>
						The App and its content are owned by The Core or its licensors. You
						are granted a limited, non-exclusive license to use the App for
						personal, non-commercial school purposes.
					</p>
				</TermsTextItem>
				<TermsTextItem>
					<h3>6. Termination</h3>
					<p>
						We reserve the right to terminate or suspend your account for
						violations of these terms.
					</p>
				</TermsTextItem>
				<TermsTextItem>
					<h3>7. Limitation of liability</h3>
					<p>
						The App is provided "AS IS". We are not liable for any damages
						arising from your use of the App.
					</p>
				</TermsTextItem>
				<TermsTextItem>
					<h3>8. Governing Law</h3>
					<p>These terms are governed by the laws of [insert jurisdiction].</p>
				</TermsTextItem>
				<TermsTextItem>
					<h3>9. Changes to Terms</h3>
					<p>
						We may update these Terms. Continued use of the App constitutes
						acceptance of the new terms.
					</p>
				</TermsTextItem>
				<TermsTextItem>
					<h3>10. Contact Us</h3>
					<p>For questions, contact [insert email].</p>
				</TermsTextItem>
			</ul>
		</TermsOfServiceContainer>
	);
};

export default TermsOfService;
