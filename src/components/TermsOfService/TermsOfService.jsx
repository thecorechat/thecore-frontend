import icon from "../../assets/icons/sprite.svg";

const TermsOfService = () => {
	return (
		<>
			<button type="button">
				<svg aria-hidden="true">
					<use href={`${icon}#icon-left`}></use>
				</svg>
			</button>
			<h2>Terms Of Service</h2>

			<ul>
				<li>
					<h3>1. Acceptance of Terms</h3>
					<p>
						By accessing or using The Core - School Chat ("the App"), you agree
						to be bound by these Terms and Conditions. If you do not agree, do
						not use the App.
					</p>
				</li>
				<li>
					<h3>2. User Eligibility</h3>
					<p>
						The App is intended for use by students, teachers, and staff in a
						school setting. Users under the age of 13 (or applicable age) must
						have parental consent.
					</p>
				</li>
				<li>
					<h3>3. User Accounts</h3>
					<p>
						You are responsible for maintaining the confidentiality of your
						account and password. You agree to provide accurate registration
						information: email, first name, and last name.
					</p>
				</li>
				<li>
					<h3>4. User Conduct</h3>
					<p>
						You agree not to: • Post inappropriate, harmful, or illegal content
						• Harass or bully other users • Impersonate others • Attempt to hack
						or disrupt the service
					</p>
				</li>
				<li>
					<h3>5. Intellectual Property</h3>
					<p>
						The App and its content are owned by The Core or its licensors. You
						are granted a limited, non-exclusive license to use the App for
						personal, non-commercial school purposes.
					</p>
				</li>
				<li>
					<h3>6. Termination</h3>
					<p>
						We reserve the right to terminate or suspend your account for
						violations of these terms.
					</p>
				</li>
				<li>
					<h3>7. Limitation of Liability</h3>
					<p>
						The App is provided "AS IS". We are not liable for any damages
						arising from your use of the App.
					</p>
				</li>
				<li>
					<h3>8. Governing Law</h3>
					<p>These terms are governed by the laws of [insert jurisdiction].</p>
				</li>
				<li>
					<h3>9. Changes to Terms</h3>
					<p>
						We may update these Terms. Continued use of the App constitutes
						acceptance of the new terms.
					</p>
				</li>
				<li>
					<h3>10. Contact Us</h3>
					<p>For questions, contact [insert email].</p>
				</li>
			</ul>
		</>
	);
};

export default TermsOfService;
