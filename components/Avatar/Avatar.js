import classes from './Avatar.module.css';

const Avatar = (props) => {
    let attachedClasses = [classes.avatar];
    if (props.topLeft) {
        attachedClasses.push(classes.topLeft)
    }
    if (props.topRight) {
        attachedClasses.push(classes.topRight)
    }
    if (props.bottomRight) {
        attachedClasses.push(classes.bottomRight)
    }
    if (props.bottomRightLow) {
        attachedClasses.push(classes.bottomRightLow)
    }
    if (props.bottomRightHigh) {
        attachedClasses.push(classes.bottomRightHigh)
    }
    return (
        <div className={attachedClasses.join(' ')}>
            {props.AvatarPhoto}
            <p className={classes.vikarJob}>{props.vikarJob}</p>
        </div>
    );
};
export default Avatar;