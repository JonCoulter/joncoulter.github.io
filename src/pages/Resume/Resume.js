import React from "react";
import { Grid, Icon, Paper, Typography } from "@mui/material";
import CustomTimeline, { CustomTimelineSeparator } from '../../components/CustomTimeline/CustomTimeline'
import CodeIcon from '@mui/icons-material/Code';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

import './Resume.css'

import db from '../../utils/db'
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";

export default function Resume() {
    return(
        <>
            {/* Experience and Education */}
            <Grid container className='section pb-45'>
                <Grid item className="section-title mb-30">
                    <span></span>
                    <h6 className='section-title-text'>
                        Resume
                    </h6>
                </Grid>

                <Grid item xs={12}>
                    <Grid container className='resume-timeline'>
                        {/* Experience */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title='Experience' icon={<CodeIcon />}>
                                {db.experiences.map((experience) => (
                                    <TimelineItem>
                                        <TimelineSeparator className='timeline-separator'>
                                            <TimelineDot 
                                                variant='outlined'
                                                className='timeline-dot'
                                            />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent className='resume-content'>
                                            <Typography className='timeline-title'>{experience.title}</Typography>
                                            <Typography variant='caption' className='timeline-date'>{experience.date}</Typography>
                                            <Typography variant='body2' className='timeline-description'>{experience.description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>

                        {/* Education */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title='Education' icon={<SchoolOutlinedIcon />}>
                                {db.education.map((education) => (
                                    <TimelineItem>
                                        <TimelineSeparator className='timeline-separator'>
                                            <TimelineDot 
                                                variant='outlined'
                                                className='timeline-dot'
                                            />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent className='resume-content'>
                                            <Typography className='timeline-title'>{education.title}</Typography>
                                            <Typography variant='caption' className='timeline-date'>{education.date}</Typography>
                                            <Typography variant='body2' className='timeline-description'>{education.description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

            {/* Services */}
            <Grid container className='section pb-45'>
                <Grid item className="section-title mb-30">
                    <span></span>
                    <h6 className='section-title-text'>
                        My Skills
                    </h6>
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing={3} justifyContent='space-around'>
                        {db.services.map((service) => (
                            <Grid item xs={12} sm={6} md={3}>
                                <div className='service'>
                                    <div className='service-icon'>
                                        {service.icon}
                                    </div>
                                    <Typography variant='h6' className='service-title'>
                                        {service.title}
                                        </Typography>
                                    <Typography variant='body2' className='service-description'>
                                        {service.description}
                                    </Typography>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

            {/* Skills */}
            <Grid container className='section' spacing={3} justifyContent='space-between'>
                {db.skills.map((skill) => (
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper elevation={0} className='skill'>
                            <Typography variant='h6' className='skills-title'>
                                {skill.title}
                            </Typography>
                            {skill.description.map((element) => (
                                <Typography variant='body2' className='skill-description'>
                                    <TimelineDot variant='outlined' className='timeline-dot' />
                                    {element}
                                </Typography>
                            ))}
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}