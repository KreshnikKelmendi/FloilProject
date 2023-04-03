import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const HorizontalTimeline = () => {
    const {t} = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 3000})
      }, [])

  return (
    <div className="container" data-aos="fade-in">                      
    <div className="row text-center justify-content-center mb-5">
        <div className="col-xl-6 col-lg-8">
            <h2 className="font-weight-bold">A Company Evolution</h2>
            <p className="text-muted">We’re very proud of the path we’ve taken. Explore the history that made us the company we are today.</p>
        </div>
    </div>

    <div className="row">
        <div className="col">
            <div className="timeline-steps aos-init aos-animate" data-aos="fade-down">
                <div className="timeline-step">
                    <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
                        <div className="inner-circle"></div>
                        <p className="h6 mt-3 mb-1 text-warning">2017</p>
                        <p className="h6 text-muted mb-0 mb-lg-0">{t('story.firstDate')}</p>
                    </div>
                </div>
                <div className="timeline-step">
                    <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2004">
                        <div className="inner-circle"></div>
                        <p className="h6 mt-3 mb-1 text-warning">2022</p>
                        <p className="h6 text-muted mb-0 mb-lg-0">{t('story.secondDate')}</p>
                    </div>
                </div>
                <div className="timeline-step">
                    <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2005">
                        <div className="inner-circle"></div>
                        <p className="h6 mt-3 mb-1 text-warning">2022</p>
                        <p className="h6 text-muted mb-0 mb-lg-0">{t('story.thirdDate')}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default HorizontalTimeline