import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Container } from 'react-bootstrap';
import '../../index.css';

const ExpiriencePage = () => {
  return (
    <div>
      ExpiriencePage
      <VerticalTimeline lineColor={"white"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          contentStyle={{ borderTop: "3px solid  white", background: "#1D1836", color: "white" }}
          date="2019"
          iconStyle={{ background: "#124076", color: "#fff" }}
        //    icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Product Resarch Intern
          </h3>
          <p>
            Hebesec Technologies Private Limited
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2012"
          contentStyle={{ borderTop: "3px solid   " }}
          contentArrowStyle={{ borderRight: "7px solid  #124076" }}
          iconStyle={{ background: "#124076", color: "#fff" }}
        //    icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Flutter Developer Intern</h3>

          <p>
            Smarther Technolgies Private Limited
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2000 - 2001"
          contentStyle={{ borderTop: "3px solid  #124076" }}
          contentArrowStyle={{ borderRight: "7px solid  #124076" }}
          iconStyle={{ background: "#124076", color: "#fff" }}

        >
          <h3 className="vertical-timeline-element-title">VAPT Intern</h3>
          <p>CyberSapiens United LLP</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default ExpiriencePage;