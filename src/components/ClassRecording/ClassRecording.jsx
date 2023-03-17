import React, { useEffect } from "react";
import "./ClassRecording.css";
import { Link } from "react-router-dom";
const ClassRecording = ({ userData, data }) => {
  const location = window.location.href;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <div className="dboard-yourcourses r-item">
        <div className="course-wrapper">
          {userData.enrolledCourses.length === 0 ? (
            <p>আপনি এখনও কোনও কোর্সে ভর্তি হননি </p>
          ) : (
            userData.enrolledCourses.map((c, x) => (
              <div className="course-wrapper" key={x}>
                {data.map(
                  (course, index) =>
                    course.course_title === c.opt_a && (
                      <div key={index} className="course-details">
                        <div className="course-img-container">
                          <img
                            className="course-img"
                            src={course.course_thumbnail}
                            alt={course.course_title}
                          />
                        </div>
                        <div className="course-title-container">
                          <p>{course.course_title}</p>
                          <p>Batch {c.opt_b}</p>
                        </div>
                        <div className="join-btn-container">
                          <Link className="link">
                            <button className="join-class-btn">
                              রেকর্ডিং দেখুন
                            </button>
                          </Link>
                        </div>
                      </div>
                    )
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassRecording;