import { useSelector, useDispatch } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.calendar);

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent(calendarEvent) );
    }

    const startSavingEvent = async( calendarEvent  ) => { 
        if ( calendarEvent._id ) {
            dispatch(onUpdateEvent(calendarEvent));
        }
        else {
            //Creando
            dispatch(onAddNewEvent({_id: new Date().getTime(), ...calendarEvent}));
        }
    }

    const startDeletingEvent = (event) => { 
        dispatch(onDeleteEvent());
    }

    return {
        //PROPIEDADES
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,

        //MÉTODOS
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent
    }
}
