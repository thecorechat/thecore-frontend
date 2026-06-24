import icon from "../../assets/icons/sprite.svg";

const PrivacyPolicy = () => {
	return (
		<>
			<button type="button">
				<svg aria-hidden="true">
					<use href={`${icon}#icon-left`}></use>
				</svg>
			</button>
			<h2>Privacy policy</h2>

			<ul>
				<li>
					<h3>1. Introduction</h3>
					<p>
						Welcome to The Core - School Chat ("the App"), a chat application
						designed for school communities. This Privacy Policy explains how we
						collect, use, disclose, and safeguard your information when you use
						our App. Please read this privacy policy carefully. If you do not
						agree with the terms of this privacy policy, please do not access
						the App.
					</p>
				</li>
				<li>
					<h3>2. Information We Collect</h3>
					<p>
						We collect minimal personal information necessary for registration
						and operation of the App: • Your email address • Your first and last
						name We do not collect sensitive personal data such as location,
						financial information, or biometric data beyond what's necessary for
						basic functionality.
					</p>
				</li>
				<li>
					<h3>3. How We Use Your Information</h3>
					<p>
						We use the collected information to: • Create and manage your user
						account • Facilitate communication within school chat groups • Send
						important notifications related to the service • Improve and
						maintain the App
					</p>
				</li>
				<li>
					<h3>4. Sharing of Information</h3>
					<p>
						We do not sell, trade, or otherwise transfer your personal
						information to outside parties. Information may be shared with: •
						School administrators for moderation purposes • Service providers
						who assist in operating the App (under strict confidentiality
						agreements) • Law enforcement if required by law
					</p>
				</li>
				<li>
					<h3>5. Data Security</h3>
					<p>
						We implement appropriate technical and organizational measures to
						protect your personal data. However, no method of transmission over
						the Internet or electronic storage is 100% secure.
					</p>
				</li>
				<li>
					<h3>6. Your Rights</h3>
					<p>
						You have the right to access, correct, or delete your personal
						information. Contact us at [insert contact email] to exercise these
						rights.
					</p>
				</li>
				<li>
					<h3>7. Children's Privacy</h3>
					<p>
						The App is intended for school use, including minors. We comply with
						applicable laws such as COPPA and GDPR where relevant. Parental
						consent may be required for users under certain ages.
					</p>
				</li>
				<li>
					<h3>8. Changes to This Policy</h3>
					<p>
						We may update this Privacy Policy from time to time. We will notify
						you of any changes by posting the new Privacy Policy on this page.
					</p>
				</li>
				<li>
					<h3>9. Contact Us</h3>
					<p>
						If you have any questions about this Privacy Policy, please contact
						us at: [insert email].
					</p>
				</li>
			</ul>
		</>
	);
};

export default PrivacyPolicy;
