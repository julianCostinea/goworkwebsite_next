import classes from './cookiepolicy.module.css';

function CookieDeclaration() {
    return (
        <div className={classes.Content}>
            <iframe id={'cookiePolicy'} src="/cookiePolicy.html" width="100%" height="1000px"></iframe>
        </div>
    )
}

export default CookieDeclaration


