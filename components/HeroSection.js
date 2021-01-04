import styles from "./HeroSection.module.css"
import blob1 from "../public/Rectangle 20.svg";
import blob2 from "../public/Rectangle 21.svg";
import dashes from "../public/Group 1095.svg";
import Button from "../components/Button"

export default function HeroSection(props) {
    return (
        <div className={styles.all}>

            <div className={styles.content}>
                <div className={styles.title}>
                    Stay Engaged In Your Meetings
                </div>

                <div className={styles.subtitle} style={{marginBottom:"30px"}}>
                    This is just the subtitle part. I can go on writing and writing and writing.
                </div>
                <Button/>
            </div>

            <img className={styles.blob1} src={blob1}/>
            <img className={styles.blob2} src={blob2}/>
            <img className={styles.dashes} src={dashes}/>

        </div>
    )
}