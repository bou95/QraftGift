import React from "react";
import {Button} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import useStore from "../store";
import hero from "../assets/images/background.jpeg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import {Route} from "react-router";

export default function LandingPage() {
    const {t, i18n} = useTranslation();
    const dir = useStore(state => state.dir)
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        console.log(lng)
        if (lng === "en") {
            useStore.setState({dir: "ltr"});
        }
        else {
            useStore.setState({dir: "rtl"});
        }
    };
    return (
        <div className="App">
            {/*<div className={'row'} dir={dir}>*/}
            {/*    <div className={"col-6"} style={{backgroundColor: 'green'}}>{t("hello")}</div>*/}
            {/*    <div className={"col-6"} style={{backgroundColor: 'pink'}}>{t("hello")}</div>*/}
            {/*</div>*/}
            {/*<Button onClick={()=> changeLanguage("ar")}>Arabic</Button>*/}
            {/*<Button onClick={()=> changeLanguage("en")}>English</Button>*/}


            <div className="heroBackground" dir={dir}>
                <img width="100%" height="100%" src={hero} alt=""/>



                <a href={"https://instagram.com/qraft_gift?igshid=YmMyMTA2M2Y"}>
                    <div className={'title'}><FontAwesomeIcon size={'lg'} color={'#blue'} icon={faInstagram}/>&nbsp;Visit our store in Instagram</div>
                </a>







            </div>

        </div>



    )
}
