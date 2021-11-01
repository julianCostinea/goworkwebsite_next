import classes from './ledige-stillinger.module.css';

function LedigeStillinger() {
    const adjustHeight = () => {
        const iframe = document.querySelector('#HRon');
        const iframeHeight = iframe.contentWindow.document.body.scrollHeight;
        setTimeout(function () {
            if (iframeHeight < 1000) {
                adjustHeight();
            } else if(iframeHeight > 1000){
                iframe.height = iframeHeight;
                return;
            }
            else {
                iframe.height = iframeHeight;
                return;
            }
        }, 100);
    }

    return (
            <iframe id={'HRon'} className={classes.HRon} src="/forJobs.html" width="100%" onLoad={adjustHeight}></iframe>
    )
}

export default LedigeStillinger


