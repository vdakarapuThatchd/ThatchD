import React, { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
function Timer() {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const resendOTP = () => {
    setMinutes(1);
    setSeconds(30);
  };

  return (
        <>
          {seconds > 0 || minutes > 0 ? 
            <Button style={{marginLeft:'2.5%'}}>
              {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </Button>
            : 
            <Button onClick={resendOTP} style={{marginLeft:'2.5%'}} color="secondary">
                resend
            </Button>
          }
        </>
  );
}

export default Timer;