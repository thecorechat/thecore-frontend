import HeaderBack from "../../ui/HeaderBack/HeaderBack";
import {
	PrivacyContainer,
	PrivacyTextItem,
	PrivacyTitle,
} from "./PrivacyPolicy.styled";

const PrivacyPolicy = ({ isOpen, onClose }) => {
	return (
		<PrivacyContainer $open={isOpen}>
			<HeaderBack onClick={onClose} />
			<PrivacyTitle>Privacy policy</PrivacyTitle>

			<ul>
				<PrivacyTextItem>
					<h3>1. Introduction</h3>
					<p>
						Welcome to The Core - School Chat ("the App"), a chat application
						designed for school communities. This Privacy Policy explains how we
						collect, use, disclose, and safeguard your information when you use
						our App. Please read this privacy policy carefully. If you do not
						agree with the terms of this privacy policy, please do not access
						the App.
					</p>
				</PrivacyTextItem>
				<PrivacyTextItem>
					<h3>2. Information We Collect</h3>
					<p>
						We collect minimal personal information necessary for registration
						and operation of the App:
						<br />• Your email address
						<br />• Your first and last name We do not collect sensitive
						personal data such as location, financial information, or biometric
						data beyond what's necessary for basic functionality.
					</p>
				</PrivacyTextItem>
				<PrivacyTextItem>
					<h3>3. How We Use Your Information</h3>
					<p>
						We use the collected information to:
						<br />• Create and manage your user account
						<br />• Facilitate communication within school chat groups
						<br />• Send important notifications related to the service
						<br />• Improve and maintain the App
					</p>
				</PrivacyTextItem>
				<PrivacyTextItem>
					<h3>4. Sharing of Information</h3>
					<p>
						We do not sell, trade, or otherwise transfer your personal
						information to outside parties. Information may be shared with:
						<br />• School administrators for moderation purposes
						<br />• Service providers who assist in operating the App (under
						strict confidentiality agreements)
						<br />• Law enforcement if required by law
					</p>
				</PrivacyTextItem>
				<PrivacyTextItem>
					<h3>5. Data Security</h3>
					<p>
						We implement appropriate technical and organizational measures to
						protect your personal data. However, no method of transmission over
						the Internet or electronic storage is 100% secure.
					</p>
				</PrivacyTextItem>
				<PrivacyTextItem>
					<h3>6. Your Rights</h3>
					<p>
						You have the right to access, correct, or delete your personal
						information. Contact us at [insert contact email] to exercise these
						rights.
					</p>
				</PrivacyTextItem>
				<PrivacyTextItem>
					<h3>7. Children's Privacy</h3>
					<p>
						The App is intended for school use, including minors. We comply with
						applicable laws such as COPPA and GDPR where relevant. Parental
						consent may be required for users under certain ages.
					</p>
				</PrivacyTextItem>
				<PrivacyTextItem>
					<h3>8. Changes to This Policy</h3>
					<p>
						We may update this Privacy Policy from time to time. We will notify
						you of any changes by posting the new Privacy Policy on this page.
					</p>
				</PrivacyTextItem>
				<PrivacyTextItem>
					<h3>9. Contact Us</h3>
					<p>
						If you have any questions about this Privacy Policy, please contact
						us at: [insert email].
					</p>
				</PrivacyTextItem>
			</ul>
		</PrivacyContainer>
	);
};

export default PrivacyPolicy;
