import * as React from "react";
import { connect } from "react-redux";
import { ILicenseObject } from "../../types/license";

import styles from "./styles.module.css";
import { getVersionsSelector } from "../../selectors/vscodeApiSelector";
import { IVersions } from "../../types/version";
import { defineMessages, InjectedIntlProps, injectIntl } from "react-intl";

interface IStateProps {
  versions: IVersions;
}

type Props = IStateProps & InjectedIntlProps;

const messages = defineMessages({
  templatesVersion: {
    id: "about.templatesVersion",
    defaultMessage: "Templates version:"
  },
  wizardVersion: {
    id: "about.wizardVersion",
    defaultMessage: "Wizard version:"
  }
});

const About = ({ versions, intl }: Props) => {
  const { templatesVersion, wizardVersion } = versions;
  return (
    <div className={styles.container}>
      <div className={styles.title}>About</div>
      <div className={styles.name}>Web Template Studio</div>
      <a className={styles.link} href="https://aka.ms/webts">
        https://aka.ms/webts
      </a>
      <div>
        {intl.formatMessage(messages.templatesVersion) + ` ${templatesVersion}`}
      </div>
      <div>
        {intl.formatMessage(messages.wizardVersion) + ` ${wizardVersion}`}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  versions: getVersionsSelector(state)
});

export default connect(mapStateToProps)(injectIntl(About));