import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

function Abtcard() {
	return (
		<div className='abcar'>
			<MDBRow>
				<MDBCol>
					<div id='acontainer'>
						<div className='aproduct-details'>
							<h1>SERVICES</h1>

							<p className='ainformation'>
							Visit this section to know more about the largest ecosystem of no-kill rescue, rehabilitation and life long care for animals.
							</p>

							<div className='acontrol'>
								<button className='abtn'>
									<span className='abuy'>More Details</span>
								</button>
							</div>
						</div>

						<div className='aproduct-image'>
							<img
								src='./images/RESDOG1.jpg'
								alt=''></img>
						</div>
					</div>
				</MDBCol>

				<MDBCol>
					<div id='acontainer'>
						<div className='aproduct-details'>
							<h1>HELPLINE</h1>

							<p className='ainformation'>
							Visit this section to get immediate response regarding animal abuse, rescue and medical facilities.
							</p>

							<div className='acontrol'>
								<button className='abtn'>
									<span className='abuy'>More Details</span>
								</button>
							</div>
						</div>

						<div className='aproduct-image'>
							<img
								src='./images/DOGRES2.jpg'
								alt=''></img>
						</div>
					</div>
				</MDBCol>
			</MDBRow>
		</div>
	);
}
export default Abtcard;
