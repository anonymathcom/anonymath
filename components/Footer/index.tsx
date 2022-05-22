import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Footer = (params: any) => {
  const t = useTranslations('Shared.Footer');
  return (
    <footer className="footer has-text-centered">
      <div className="is-size-6 mt-6">
        <div className="footer-links">
          <Link
            href={params.routes[params.currentLocale].Contribute}
            locale={params.currentLocale}
          >
            <a className="contribute">{t('contribute')}</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
