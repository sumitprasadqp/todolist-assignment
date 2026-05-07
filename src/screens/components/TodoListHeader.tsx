import {
  WuAppHeader,
  WuAppHeaderSearch,
  WuButton,
} from '@npm-questionpro/wick-ui-lib'

interface ITodoHeaderProps {
  headerName?: string
}

export const TodoListHeader = ({
  headerName = 'Default Product Name',
}: ITodoHeaderProps): React.ReactNode => {
  return (
    <WuAppHeader
      categories={[
        {
          active: true,
          desc: '',
          logo: 'https://www.qa-priority.questionpro.com/images/appnavigation/research-suite.svg',
          name: 'Research Suite',
          order: 1,
          products: [
            {
              active: true,
              icon: 'e308',
              link: 'https://www.questionpro.com/a/listSurveys.do',
              logo: 'https://www.qa-priority.questionpro.com/images/appnavigation/survey-product.png',
              name: 'Surveys',
              order: 1,
            },
            {
              active: true,
              icon: 'e314',
              link: 'https://www.questionpro.com/a/showPanelManagement.do',
              logo: 'https://www.qa-priority.questionpro.com/images/appnavigation/communities-product.png',
              name: 'Communities',
              order: 2,
            },
            {
              active: true,
              icon: 'e309',
              link: 'https://www.questionpro.com/a/showAudience.do',
              logo: 'https://www.qa-priority.questionpro.com/images/appnavigation/audience-product.png',
              name: 'Audience',
              order: 3,
            },
            {
              active: true,
              icon: 'e380',
              link: 'https://instantanswers.questionpro.com?appOrigin=https://www.questionpro.com',
              logo: 'https://www.qa-priority.questionpro.com/images/appnavigation/instant-answers-product-icon.png',
              name: 'Instant Answers',
              order: 4,
            },
            {
              active: true,
              icon: 'e317',
              link: 'https://insightshub.questionpro.com?appOrigin=https://www.questionpro.com',
              logo: 'https://www.qa-priority.questionpro.com/images/appnavigation/insightshub-product.png',
              name: 'InsightsHub',
              order: 5,
            },
            {
              active: true,
              icon: 'e352',
              link: 'https://www.questionpro.com/a/showDigsite.do',
              logo: 'https://www.qa-priority.questionpro.com/images/appnavigation/digsite-product.svg',
              name: 'Digsite',
              order: 6,
            },
          ],
        },
        {
          active: true,
          desc: '',
          logo: 'https://www.qa-priority.questionpro.com/images/appnavigation/customer-experience.svg',
          name: 'Customer Experience',
          order: 2,
          products: [
            {
              active: true,
              icon: 'e313',
              link: 'https://www.questionpro.com/a/showCXFeedback.do',
              logo: 'https://www.qa-priority.questionpro.com/images/appnavigation/cx-product.png',
              name: 'Customer Experience',
              order: 1,
            },
            {
              active: true,
              icon: 'e308',
              link: 'https://www.questionpro.com/a/listSurveys.do',
              logo: 'https://www.qa-priority.questionpro.com/images/appnavigation/survey-product.png',
              name: 'Surveys',
              order: 2,
            },
            {
              active: true,
              icon: 'e316',
              link: 'https://www.questionpro.com/a/showReputation.do?appOrigin=https://www.questionpro.com',
              logo: 'https://www.qa-priority.questionpro.com/images/appnavigation/reputation-product.png',
              name: 'Reputation',
              order: 3,
            },
            {
              active: true,
              icon: 'e309',
              link: 'https://outerloop.questionpro.com?appOrigin=https://www.questionpro.com',
              logo: 'https://www.qa-priority.questionpro.com/images/appnavigation/outer-loop-product.png',
              name: 'Outerloop',
              order: 4,
            },
            {
              active: true,
              icon: 'e329',
              link: 'https://www.questionpro.com/a/showCLF.do',
              logo: 'https://www.qa-priority.questionpro.com/images/appnavigation/clf-product.png',
              name: 'Closedloop',
              order: 5,
            },
            {
              active: true,
              icon: 'e378',
              link: 'https://www.questionpro.com/a/showIntercept.do',
              logo: 'https://www.qa-priority.questionpro.com/images/appnavigation/intercept-product.svg',
              name: 'Intercept',
              order: 6,
            },
            {
              active: true,
              icon: 'e382',
              link: 'https://suitecx.questionpro.com?appOrigin=https://www.questionpro.com',
              logo: 'https://www.qa-priority.questionpro.com/images/appnavigation/suite-cx-product-icon.png',
              name: 'Journey Management',
              order: 7,
            },
          ],
        },
        {
          active: true,
          desc: '',
          logo: 'https://www.qa-priority.questionpro.com/images/appnavigation/employee-experience.svg',
          name: 'Employee Experience',
          order: 3,
          products: [
            {
              active: true,
              icon: 'e315',
              link: 'https://www.questionpro.com/a/listMyFlashletSurveys.do',
              logo: 'https://www.qa-priority.questionpro.com/images/appnavigation/workforce-product.png',
              name: 'Employee Experience',
              order: 1,
            },
            {
              active: false,
              icon: 'e308',
              link: 'https://www.questionpro.com/a/listSurveys.do',
              logo: 'https://www.qa-priority.questionpro.com/images/appnavigation/survey-product.png',
              name: 'Surveys',
              order: 2,
            },
            {
              active: true,
              icon: 'e324',
              link: 'https://empower.questionpro.com?appOrigin=https://www.questionpro.com',
              logo: 'https://www.qa-priority.questionpro.com/images/appnavigation/empower-product.svg',
              name: 'Empower',
              order: 3,
            },
          ],
        },
        {
          active: false,
          desc: '',
          logo: 'https://www.qa-priority.questionpro.com/images/appnavigation/bi-product.svg',
          name: 'Business Intelligence',
          order: 4,
          products: [
            {
              active: true,
              icon: 'e381',
              link: 'https://bi.questionpro.com?appOrigin=https://www.questionpro.com',
              logo: 'https://www.qa-priority.questionpro.com/images/appnavigation/bi-product-icon.png',
              name: 'BI',
              order: 1,
            },
          ],
        },
        {
          active: true,
          desc: '',
          logo: 'https://www.qa-priority.questionpro.com/images/appnavigation/engagement.svg',
          name: 'Engagement Tools',
          order: 5,
          products: [
            {
              active: true,
              icon: 'e311',
              link: 'https://livepolls.questionpro.com?appOrigin=https://www.questionpro.com',
              logo: 'https://www.qa-priority.questionpro.com/images/appnavigation/live-polls-product.png',
              name: 'LivePolls',
              order: 1,
            },
          ],
        },
      ]}
      dir="ltr"
      onLogout={function uV() {}}
      productName={headerName}
      user={{
        invoice: {
          size: 2,
          title: 'Billing & Invoices',
          url: 'https://www.questionpro.com/a/showUpgradeUser.do?payment=PaymentHistory',
        },
        issueTrackerCount: 0,
        license: {
          currentLicenseExpiryDays: 327,
          expiryAfterQuarter: true,
          expiryBeforeTwoMonth: false,
          expiryDate: 'Jun 31, 2025',
          expiryDatePostFixString: 'Expires',
          showExpiryDate: true,
          subtitle: 'Employee Edition',
          title: 'UPGRADE ACCOUNT',
          upgradeLink: true,
          url: 'https://www.questionpro.com/a/showUpgradeUser.do?payment=RecurringOrder',
        },
        profile: {
          companyName: 'Untitled - Company Name',
          initials: 'MI',
          profilePicture: 'https://picsum.photos/200/300',
          sentimentIndustry: 'automotive',
          subtitle: 'saiful.islam@questionpro.com',
          title: 'Md. Saiful Islam',
          url: 'https://www.questionpro.com/a/showUpgradeUser.do?payment=creditCardUpdate',
        },
        settings: [
          {
            // betaIconHTML: '',
            canDisplay: true,
            displayIcon: true,
            icon: 'fa fa-cogs f13 text-center icon-dimen',
            title: 'My Account',
            url: 'https://www.questionpro.com/a/showUpgradeUser.do?payment=creditCardUpdate',
          },
          {
            // betaIconHTML: '',
            canDisplay: true,
            displayIcon: false,
            title: 'Organization',
            url: 'https://www.questionpro.com/a/showUsers.do',
          },
          {
            // betaIconHTML: '',
            canDisplay: true,
            displayIcon: false,
            title: 'Compliance',
            url: 'https://www.questionpro.com/a/showCanSpamCompliance.do',
          },
          {
            // betaIconHTML: '',
            canDisplay: true,
            displayIcon: false,
            title: 'Issue Tracker',
            url: 'https://www.questionpro.com/a/showIssueTracker.do',
          },
          {
            // betaIconHTML: '',
            canDisplay: true,
            displayIcon: false,
            title: 'Global Settings',
            url: 'https://www.questionpro.com/a/showUpgradeUser.do?payment=creditCardUpdate',
          },
          {
            // betaIconHTML: '',
            canDisplay: false,
            displayIcon: false,
            title: 'Partner CRM',
            url: 'https://www.questionpro.com/a/showPartnerCRM.do',
          },
        ],
        usage: {
          collectedResponseCount: '27',
          displayResponseProgressBar: false,
          responseCountPercentage: -2700,
          title: 'Usage',
          url: 'https://www.questionpro.com/a/usageDashboard.do',
        },
      }}
    >
      <div className="wu-flex wu-gap-2 wu-items-end wu-justify-end wu-w-full">
        <WuAppHeaderSearch onSearch={function uV() {}} />
        <WuButton color="upgrade" variant="rounded">
          Upgrade now
        </WuButton>
      </div>
    </WuAppHeader>
  )
}
