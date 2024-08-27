import React from "react";
import { Grid, Typography } from "@mui/material";
import CustomTimeline, { CustomTimelineSeparator } from '../../components/CustomTimeline/CustomTimeline'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";

import './Teaching.css'

import db from '../../utils/db'

export default function Teaching() {
    return(
        <>
            {/* Teaching */}
            <Grid container className='section pb-45'>
                <Grid item className="section-title mb-30">
                    <span></span>
                    <h6 className='section-title-text'>
                        Courses I have Taught at Pitt
                    </h6>
                </Grid>

                <Grid item xs={12}>
                    <Grid container className='teaching-timeline'>
                        {/* Experience */}
                        <Grid item sm={12}>
                            <CustomTimeline title='Teaching' icon={<SchoolOutlinedIcon />}>
                                {db.teaching.map((teach) => (
                                    <TimelineItem>
                                        <TimelineSeparator className='timeline-separator'>
                                            <TimelineDot 
                                                variant='outlined'
                                                className='timeline-dot'
                                            />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent className='teaching-content'>
                                            <Typography className='teach-semester'>{teach.semester}</Typography>
                                            <Typography variant='caption' className='teach-courses'>{teach.courses}</Typography>
                                            <Typography variant='body2' className='teach-role'>{teach.role}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}