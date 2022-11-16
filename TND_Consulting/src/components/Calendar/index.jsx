import './style.scss';

//TODO change for website owner calendar or try fullcalendar.io 

const Calendar = () => {
  return (
    <div className="pageContainer">
      <iframe className="calendar" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%234285F4&ctz=Europe%2FParis&showTitle=0&showPrint=0&showTabs=0&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uZnJlbmNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%2333B679&color=%230B8043"></iframe>
    </div>
  )
}

export default Calendar