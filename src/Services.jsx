import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img1 from "./images/graph.png";
import img2 from "./images/open-book.png";
import img3 from "./images/team.png";
import img4 from "./images/project-management.png";
import img5 from "./images/scans/cardiac 2.png";
import img6 from "./images/EKGStrip.png";
import img7 from "./images/3DSizing.png";
import img8 from "./images/enhance-1.jpg";
import img9 from "./images/scans/Cardiac 5.jpg";
import img10 from "./images/nurseImage.jpg";
import Footer from "./Footer";
import SingleService from "./SingleService";

export const Services = props => {
  return (
    <>
      <Container
        style={{ textAlign: "center", marginTop: 20, marginBottom: 100 }}
      >
        <Row style={{ textAlign: "center", marginTop: 40, marginBottom: 20 }}>
          <Col>
            <h1 className="display-4" style={{ fontWeight: 600 }}>
              Services
            </h1>
            <p>
              Over time, we have had the privilege to learn from the best
              Cardiologists in the world at the Minneapolis Heart Institute
              (MHI) of Abbott Northwestern Hospital. CorTactics’ mission is to
              leverage our team’s knowledge to <strong>educate</strong> and{" "}
              <strong>boost</strong> your CT department by utilizing our{" "}
              <strong>innovative</strong> and <strong>tailored </strong>
              techniques.
            </p>
          </Col>
        </Row>
        <Row style={{ textAlign: "center" }}>
          <Col>
            <h3>Boost</h3>
            <Image src={img1} style={{ width: "50%" }} fluid></Image>
          </Col>
          <Col>
            <h3>Educate</h3>
            <Image src={img2} style={{ width: "50%" }} fluid></Image>
          </Col>
          <Col>
            <h3>Tailored</h3>
            <Image src={img3} style={{ width: "50%" }} fluid></Image>
          </Col>
          <Col>
            <h3>Innovative</h3>
            <Image src={img4} style={{ width: "50%" }} fluid></Image>
          </Col>
        </Row>
      </Container>
      <Container>
        <SingleService id="ct_acq" title="CT Acquisition" imgSrc={img5}>
          <li>
            <p>
              We provide training on Siemens-GE-Canon,Toshiba and Phillips CT
              scanners for CT Coronary angiograms, structural heart, vascular
              and congenital heart exams.{" "}
            </p>
          </li>
          <li>
            <p>
              Demonstrate proper protocols for combination scans i.e. Double and
              Triple rule out scans (Coronaries, Ascending aorta and Pulmonary
              embolism)
            </p>
          </li>
          <li>
            <p>Methods and education for scanning bypass grafts and stents</p>
            <ul>
              <li>
                <p style={{ fontSize: 12 }}>
                  Including best kernel reconstruction
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p>
              Ensure quality images on any heart rate with any type of ectopy.
              <ul style={{ fontSize: 12 }}>
                <li> A-fib</li>
                <li> PVC's </li>
                <li> PAC's</li>
                <li> Heart Block </li>
                <li>Pacemaker Adjusting</li>
              </ul>
            </p>
          </li>
          <li>
            <p>EKG editing strategies for ANY heart rate or rhythm.</p>
          </li>
          <li>
            <p>
              Troubleshooting EKG rhythms prior to choosing scan acquisition
              protocol.
            </p>
          </li>
          <li>
            <p>
              Ensuring sufficient image quality while minimizing radiation
              exposure.
            </p>
          </li>
          <li>
            <p>
              Anatomical and Functional valve protocols along with myocardial
              perfusion (CTP).
            </p>
          </li>
          <li>
            <p>
              Lower tube potential and adequate “contrast to noise ratio”
              (intra-arterial opacification >250 HU.
            </p>
          </li>
        </SingleService>
        <SingleService
          id="education"
          title="Proven Staff Education and Positioning"
          imgSrc={img6}
        >
          <li>
            <p>
              Pre-procedure valve protocols for for all heart valves including
              TAVR, TMVR, Tricuspid and pulmonic valves.{" "}
            </p>
          </li>
          <li>
            <p>
              Custom-built technique charts based on patient body habitus and
              site CT equipment.
            </p>
          </li>
          <li>
            <p>Breath-hold training.</p>
          </li>
          <li>
            <p>
              Ideal patient positioning and electrocardiographic (ECG) lead
              placement.
            </p>
          </li>
          <li>
            <p>
              Recommendation for appropriately equipped facility and staffed to
              manage contrast reactions, including anaphylaxis.
            </p>
          </li>
          <li>
            <p>
              Cortactics provides in depth EKG and cardiac anatomy education
            </p>
          </li>
        </SingleService>
        <SingleService
          id="3D_sizing"
          title="3 Dimensional CT Sizing"
          imgSrc={img7}
        >
          <li>
            <p>
              Consistency with proven techniques for Trans-Catheter Therapy
              planning involving Aortic, Tricuspid, Mitral and Pulmonic valves.
            </p>
          </li>
          <li>
            <p>
              Peripheral access interrogation techniques for Transcatheter
              deployment.
            </p>
          </li>
          <li>
            <p>
              Paravalvular leak assessment and planning techniques for
              treatment.
            </p>
          </li>
          <li>
            <p>
              Efficient Image post-processing performed on Vital Images,
              3Mensio, Circle, TeraRecon, GE AW, Zylosoft and Siemens Syngo via
              workstations.
            </p>
          </li>
        </SingleService>
        <SingleService
          id="contrast_full"
          title="Contrast Enhancement"
          imgSrc={img8}
        >
          <li>
            <p>High flow high-pressure protocols.</p>
          </li>
          <li>
            <p>
              Personalized adaptation of Contrast protocols with sophisticated
              scan timing techniques.
            </p>
          </li>
          <li>
            <p>
              Vein to Aorta travel time: Precise scan-timing for optimal
              opacification for Siemens-Toshiba/Cannon-GE-Phillips scanners,
              Bolus tracking and test bolus approach options.
            </p>
          </li>
          <li>
            <p>
              Satisfactory aortic blood pool attenuation regardless of vendor.
            </p>
          </li>
          <li>
            <p>
              Triphasic injection protocols that allows accurate and
              reproducible assessment of the RV volumes, anatomic structures,
              cardiac disease, and right ventricular function. Tailored
              injection protocols like these for patients not suitable for MRI
              or echocardiography.
            </p>
          </li>
          <li>
            <p>
              Contrast Induced Nephropathy (CIN) and the importance of judicious
              use of IV contrast.
            </p>
          </li>
          <li>
            <p>
              Contrast medium: injection based on patient-related (body size and
              cardiac output), scanner-related and CM-related factors.
            </p>
          </li>
          <li>
            <p>Contrast volumes based on injection rate and scan durations</p>
          </li>
          <li>
            <p>
              <strong>Pediatric​ </strong>injection rates for all morphologic
              procedures to patient size and IV gauge.
            </p>
          </li>
          <li>
            <p>Biphasic or tri-phasic injection protocols.</p>
          </li>
          <li>
            <p>
              Bolus Tracking implies semi-automated scan triggering.
              ADVANTAGES-potential to reduce the overall contrast dose by
              eliminating the test bolus, however it does add complexity to the
              scan protocol.
            </p>
          </li>
          <li>
            <p>
              Test Bolus technique consists of a small test bolus of contrast
              followed by a saline bolus, enhancement curve is generated to
              determine the contrast transit time to peak enhancement in the
              coronary arteries. ADVANTAGES-opportunity to acquaint the patient
              with the breath hold commands and the sensation of contrast
              injection.
            </p>
          </li>
        </SingleService>
        <SingleService
          id="allergy"
          title="Nursing and Patient Protocols"
          imgSrc={img10}
        >
          <li>
            <p>Contrast allergy prep inpatient and outpatient.</p>
          </li>
          <li>
            <p>Renal insufficiency protocols to acquire scan.</p>
          </li>
          <li>
            <p>
              Medical history inventory to be aware of including BP,
              Cardiomyopathy, Asthma, Pulmonary Hypertension and so on.
            </p>
          </li>
          <li>
            <p>Absolute contraindications.</p>
          </li>
          <li>
            <p>
              Beta Blockade and Nitroglycerin protocols before and during the
              procedure.
            </p>
          </li>
          <li>
            <p>Discharge criteria</p>
          </li>
          <li>
            <p>CIN contrast induced nephropathy</p>
          </li>
          <li>
            <p>
              ACR and ACC guidelines for the management of contrast reactions.
            </p>
          </li>
        </SingleService>
        <SingleService
          id="p_ct_acq"
          title="Pediatric Congenital CT Acquisition"
          imgSrc={img9}
        >
          <li>
            <p>
              Tested Cardiac CT Protocols for congenital heart disease(CHD)
              <ul>
                <li>Tetralogy of Fallot</li>
                <li>Single Ventricle</li>
                <li>Transposition Complexes </li>
                <li>Aortic Arch Abnormalities-Rings/Slings </li>
                <li>Coronary Anomalies</li>
              </ul>
            </p>
          </li>
          <li>
            <p>
              Decreasing diagnostic risk while maintaining diagnostic accuracy.
            </p>
          </li>
          <li>
            <p>
              Age and size based modifications for patient preparation and image
              acquisition.
            </p>
          </li>
        </SingleService>
      </Container>
    </>
  );
};

export default Services;
