import React, { useEffect } from "react";
import {
  VerticalTimelineElement,
  VerticalTimeline,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

interface Props {}

const Experience = (props: Props) => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="2008-2012"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Henan Institute of Science and Technology
          </h3>
          <p>Bachelor of electrical engineering and automation</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="2012-2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Xinxiang Civil Air Defense Office
          </h3>
          <p>Electrical Engineer</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="2019-2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Tasmania
          </h3>
          <p>Master of Information&Communication Technology</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="2021-current"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Funkie Loopie</h3>
          <p>Web Developer</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
export default Experience;
