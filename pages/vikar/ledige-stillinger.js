import classes from './ledige-stillinger.module.css';

function LedigeStillinger() {
    const adjustHeight = () => {
        const iframe = document.querySelector('#HRon');
        const iframeHeight = iframe.contentWindow.document.body.scrollHeight;
        // setTimeout(function () {
        //     if (iframeHeight < 1000) {
        //         adjustHeight();
        //     } else if (iframeHeight > 1000) {
        //         console.log("LOADED 1");
        //         console.log(iframe.contentWindow.document.body.scrollHeight);
        //         iframe.height = iframeHeight;
        //         return;
        //     }
        //     else {
        //         console.log("LOADED 2");
        //         console.log(iframe.contentWindow.document.body.scrollHeight);
        //         iframe.height = iframeHeight;
        //         return;
        //     }
        // }, 100);
        console.log(iframeHeight);
        console.log(document.querySelector('#HRon').contentWindow.document.body.scrollHeight);
    }

    return (
        <div className={classes.Content}>
            <iframe id={'HRon'} className={classes.HRon} src="/forJobs.html" width="100%" onLoad={adjustHeight}></iframe>
        </div>
    )
}

export default LedigeStillinger


