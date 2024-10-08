import { Typography } from "@mui/material";
import React from "react";
import { TimelineContent, TimelineItem } from "@mui/lab";
import CustomTimeline, { CustomTimelineSeparator } from '../CustomTimeline/CustomTimeline'
import { PersonOutlineOutlined } from "@mui/icons-material";
import CustomButton from '../CustomButton/CustomButton'
import GetAppIcon from '@mui/icons-material/GetApp';

import './Profile.css'

import db from '../../utils/db'


function CustomTimelineItem({ title, text, link }) {
    return(
        <TimelineItem>
            <CustomTimelineSeparator />
            <TimelineContent className="timeline-content">
                {link ? (
                    <Typography className="timeline-item-text">
                        <span>{title}:</span>{' '}
                        <a href={link} target='_blank'>
                            {text}
                        </a>
                    </Typography>
                ) : (
                    <Typography className='timeline-item-text'>
                        <span>{title}:</span> {text}
                    </Typography>
                )}
            </TimelineContent>
        </TimelineItem>
    )
}

export default function Profile() {
    return(
        <div className='profile container-shadow' sticky='top'>
            <div className='profile-name'>
                <Typography className='name'>
                    {db.name}
                </Typography>
                <Typography className='title'>
                    {db.title}
                </Typography>
            </div>

            <div className='profile-image'>
                <img src={'/images/pfp.png'} alt="" />
            </div>

            <div className='profile-information'>
                <CustomTimeline icon={<PersonOutlineOutlined />}>
                    <CustomTimelineItem title="Email" text={db.email}/>

                    {Object.keys(db.socials).map(key => (
                        <CustomTimelineItem title={key} text={db.socials[key].text} link={db.socials[key].link}/>
                    ))}
                </CustomTimeline>

                <div className='btn-container'>
                <CustomButton
                    icon={<GetAppIcon />}  // Assuming you import this icon
                    text="View Resume"
                    href="/Jonathan_Coulter_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Resume"
                />

                </div>
            </div>
        </div>
    )
}