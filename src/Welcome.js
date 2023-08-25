import { useTranslation } from "react-i18next";

const Welcome = () => {
    const {t} = useTranslation();
    return (
        <>
            <h1>{t('welcome')}</h1>
            <div>{t('language')}</div>
        </>
    )
}

export default Welcome;