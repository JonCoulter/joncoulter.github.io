import React from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography } from "@mui/material";
import WorkIcon from '@mui/icons-material/Work';

import './CustomTimeline.css'

export default function CustomTimeline({ children, title, icon }) {

  return(
    <Timeline className='timeline'>
      {/* Item Header */}
      <TimelineItem className='timeline-first-item'>
        <TimelineSeparator>
          <TimelineDot className='timeline-dot-header' >
            {icon}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant='h6' className='timeline-header'>
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      {children}
    </Timeline>
  )
}

export function CustomTimelineSeparator() {
  return(
    <TimelineSeparator className='timeline-separator'>
      <TimelineDot variant='outlined' className='timeline-dot'/>
      <TimelineConnector />
    </TimelineSeparator>
  )
}