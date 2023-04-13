import React, { useState } from 'react'
import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { CalendarEvent, CalendarModal, FabAddNew, Navbar, FabDelete } from '../'
import { getMessagesES, localizer } from '../../helpers'
import { useUIStore, useCalendarStore } from '../../hooks'



export const CalendarPage = () => {

  const { events, setActiveEvent } = useCalendarStore();
  const { openDateModal } = useUIStore();
  
  const [lastView, setlastView] = useState(localStorage.getItem('lastView') || 'week')

  const onDoubleClick = (event) => {
    openDateModal();
  }

  const onSelect = (event) => {
    setActiveEvent(event);
  }

  const onViewChanged = (event) => {
    localStorage.setItem('lastView', event);
    setlastView(event);
  }


  const eventStyleGetter = (event, start, end, isSelected) => {

    const style = {
      bacgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }
  }

  return (

    <>
      <Navbar />

      <Calendar
        defaultView={lastView}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />

      <CalendarModal />
      <FabAddNew />
      <FabDelete /> 
    </>
  )
}
