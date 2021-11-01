import classes from './ledige-stillinger.module.css';

function LedigeStillinger() {
    const adjustHeight = () => {
        const iframe = document.querySelector('#HRon');
        setTimeout(function () {
            if (iframe.contentWindow.document.body.scrollHeight < 1000) {
                adjustHeight();
            }
            if (iframe.contentWindow.location > 52) {
                console.log("IN IF STATEMNT");
                document.querySelector('#HRon').height = document.querySelector('#HRon').contentWindow.document.body.scrollHeight;
            }
            else {
                iframe.height = iframe.contentWindow.document.body.scrollHeight;
                return;
            }
        }, 100);
    }

    return (
        <div className={classes.Content}>
            <iframe id={'HRon'} className={classes.HRon} src="/forJobs.html" width="100%" onLoad={adjustHeight}></iframe>
        </div>
    )
}

export default LedigeStillinger


