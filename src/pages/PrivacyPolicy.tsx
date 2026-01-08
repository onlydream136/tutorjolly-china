import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <h1 className="text-3xl font-bold text-foreground mb-8">Tutor Jolly隐私政策</h1>
            
            <p className="text-muted-foreground leading-relaxed">
              本隐私政策（下称"本政策"）由深圳市播闪科技有限公司（注册地址：深圳市罗湖区国际商品交易大厦7C11）（下称"我们"或"Tutor Jolly"）制定，适用于我们通过Tutor Jolly移动应用程序、官方网站（统称"本平台"）及相关服务（下称"本服务"）向您提供的产品与服务。
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              请您在使用本服务前，仔细阅读并充分理解本政策的全部内容。如您不同意本政策的任何内容，请立即停止使用本服务。一旦您开始使用本服务，即表示您已充分理解并同意本政策的全部内容。
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. 我们如何收集和使用您的个人信息</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              个人信息是指以电子或者其他方式记录的与已识别或者可识别的自然人有关的各种信息。我们仅会出于本政策所述的以下目的，收集和使用您的个人信息：
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1.1 账户注册与登录</h3>
            <p className="text-muted-foreground leading-relaxed">
              当您注册账户时，我们会收集您的电子邮箱地址、密码，用于创建账户、验证身份和保障账户安全。
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1.2 使用核心功能</h3>
            <ul className="text-muted-foreground space-y-2">
              <li><strong>智能导师功能：</strong>当您使用智能导师互动学习时，我们会收集您与AI互动的语音录音和文本对话内容，用于提供实时反馈、评估学习效果和改进算法。我们仅在您主动使用该功能时收集，不会在后台常驻访问麦克风。</li>
              <li><strong>购买与支付：</strong>当您购买VIP会员或课程时，我们会收集订单信息、交易记录、支付账号相关信息（通过第三方支付平台处理，我们不会直接收集银行卡等敏感信息），用于完成交易、开具发票和售后服务。</li>
              <li><strong>学习进度管理：</strong>我们会收集您的学习时长、课程完成情况、练习记录等，用于展示学习报告和个性化推荐。</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1.3 改进服务质量</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>我们会收集设备信息（如设备型号、操作系统版本、唯一设备标识符）、日志信息（如IP地址、访问时间、页面浏览记录、点击流数据），用于分析服务运行状况、排查故障、防范安全风险。</li>
              <li>我们可能会使用Cookie和同类技术（如本地存储）来记住您的偏好、优化页面展示。您可以通过浏览器设置管理Cookie。</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1.4 客服与售后</h3>
            <p className="text-muted-foreground leading-relaxed">
              当您联系我们的客服或参与问卷调查时，我们可能会记录您的联系方式、沟通内容，以便解决问题和改进服务。
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1.5 法律法规要求</h3>
            <p className="text-muted-foreground leading-relaxed">
              根据相关法律法规及国家标准，在以下情形中，我们可能会依法收集并使用您的个人信息而无需征得您的同意：
            </p>
            <ol className="text-muted-foreground space-y-1 list-decimal list-inside">
              <li>为订立、履行您作为一方当事人的合同所必需；</li>
              <li>为履行法定职责或者法定义务所必需；</li>
              <li>为应对突发公共卫生事件，或者紧急情况下为保护自然人的生命健康和财产安全所必需；</li>
              <li>为公共利益实施新闻报道、舆论监督等行为，在合理的范围内处理个人信息；</li>
              <li>依照本法规定在合理的范围内处理您自行公开或者其他已经合法公开的个人信息；</li>
              <li>法律、行政法规规定的其他情形。</li>
            </ol>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. 我们如何共享、转让、公开披露您的个人信息</h2>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2.1 共享</h3>
            <p className="text-muted-foreground leading-relaxed">
              我们不会与任何公司、组织和个人共享您的个人信息，但以下情况除外：
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li><strong>在获取您明确同意的情况下共享：</strong>获得您的明确同意后，我们会与其他方共享您的个人信息。</li>
              <li><strong>与授权合作伙伴共享：</strong>仅为实现本政策中声明的目的，我们的某些服务将由授权合作伙伴提供。我们可能会与合作伙伴共享您的某些个人信息，以提供更好的客户服务和用户体验。例如，我们委托第三方支付公司处理支付交易、委托短信服务商发送验证码、委托数据分析服务商协助我们进行数据统计。我们仅会出于合法、正当、必要、特定、明确的目的共享您的个人信息，并且只会共享提供服务所必要的个人信息。我们的合作伙伴无权将共享的个人信息用于任何其他用途。</li>
              <li>根据法律法规规定或政府部门的强制性要求进行共享。</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2.2 转让</h3>
            <p className="text-muted-foreground leading-relaxed">
              我们不会将您的个人信息转让给任何公司、组织和个人，但以下情况除外：
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li>在获取您明确同意的情况下转让；</li>
              <li>在本公司发生合并、收购或破产清算情形，或其他涉及合并、收购或破产清算情形时，如涉及到个人信息转让，我们会要求新的持有您个人信息的公司、组织继续受本政策的约束，否则我们将要求该公司、组织和个人重新向您征求授权同意。</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2.3 公开披露</h3>
            <p className="text-muted-foreground leading-relaxed">
              我们仅会在以下情况下，公开披露您的个人信息：
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li>获得您明确同意后；</li>
              <li><strong>基于法律的披露：</strong>在法律、法律程序、诉讼或政府主管部门强制性要求的情况下，我们可能会公开披露您的个人信息。</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2.4 共享、转让、公开披露个人信息时事先征得授权同意的例外</h3>
            <p className="text-muted-foreground leading-relaxed">
              根据相关法律法规及国家标准，在以下情形中，共享、转让、公开披露您的个人信息无需事先征得您的授权同意：
            </p>
            <ol className="text-muted-foreground space-y-1 list-decimal list-inside">
              <li>为订立、履行个人作为一方当事人的合同所必需；</li>
              <li>为履行法定职责或者法定义务所必需；</li>
              <li>为应对突发公共卫生事件，或者紧急情况下为保护自然人的生命健康和财产安全所必需；</li>
              <li>为公共利益实施新闻报道、舆论监督等行为，在合理的范围内处理个人信息；</li>
              <li>依照本法规定在合理的范围内处理您自行公开或者其他已经合法公开的个人信息；</li>
              <li>法律、行政法规规定的其他情形。</li>
            </ol>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. 我们如何保护您的个人信息</h2>
            <p className="text-muted-foreground leading-relaxed">
              3.1 我们已采取符合业界标准的安全防护措施保护您提供的个人信息，防止数据遭到未经授权访问、公开披露、使用、修改、损坏或丢失。我们会使用加密技术确保数据的保密性；我们会使用受信赖的保护机制防止数据遭到恶意攻击；我们会部署访问控制机制，确保只有授权人员才可访问个人信息。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              3.2 我们建立了专门的管理制度、流程和组织确保信息安全。例如，我们严格限制访问个人信息的人员范围，要求他们遵守保密义务，并进行审计。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              3.3 尽管有前述安全措施，但请您理解，在互联网行业由于技术的限制和可能存在的各种恶意手段，不可能始终保证信息百分之百的安全。您需要了解，您接入我们的服务所用的系统和通讯网络，有可能因我们可控范围外的因素而出现问题。
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. 您的权利</h2>
            <p className="text-muted-foreground leading-relaxed">
              按照中国相关的法律、法规、标准，以及其他国家、地区的通行做法，我们保障您对自己的个人信息行使以下权利：
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4.1 访问、更正与补充您的个人信息</h3>
            <p className="text-muted-foreground leading-relaxed">
              您可以通过登录账户，在"个人中心"访问、更正或补充您的个人信息（如昵称、头像等）。
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4.2 删除您的个人信息</h3>
            <p className="text-muted-foreground leading-relaxed">
              在以下情形中，您可以向我们提出删除个人信息的请求：
            </p>
            <ol className="text-muted-foreground space-y-1 list-decimal list-inside">
              <li>如果我们处理个人信息的行为违反法律法规；</li>
              <li>如果我们收集、使用您的个人信息，却未征得您的同意；</li>
              <li>如果我们处理个人信息的行为违反了与您的约定；</li>
              <li>如果您不再使用我们的产品或服务，或您注销了账号；</li>
              <li>如果我们不再为您提供产品或服务。</li>
            </ol>
            <p className="text-muted-foreground leading-relaxed mt-2">
              当您从我们的服务中删除信息后，我们可能不会立即在备份系统中删除相应的信息，但会在备份更新时删除这些信息。
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4.3 改变您授权同意的范围</h3>
            <p className="text-muted-foreground leading-relaxed">
              每个业务功能需要一些基本的个人信息才能得以完成。对于额外收集的个人信息的收集和使用，您可以随时给予或收回您的授权同意。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              您可以通过注销账户的方式，撤回我们继续收集您个人信息的全部授权。但请注意，撤回同意后，我们将无法继续为您提供撤回同意所对应的服务，也不再处理您相应的个人信息。但您撤回同意的决定，不会影响此前基于您的授权而开展的个人信息处理。
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4.4 注销账户</h3>
            <p className="text-muted-foreground leading-relaxed">
              您可以通过以下方式申请注销账户：
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li>在App内"设置-账户与安全"中找到账户注销功能，按照指引操作；</li>
              <li>发送邮件至 customerservices@itutorai.com，提供账户信息和身份验证材料。</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-2">
              我们将在验证您的身份后15个工作日内处理您的注销请求。账户注销后，我们将停止为您提供产品与/或服务，并依据您的要求，删除您的个人信息或进行匿名化处理，法律法规另有规定的除外。
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4.5 响应您的上述请求</h3>
            <p className="text-muted-foreground leading-relaxed">
              为保障安全，您可能需要提供书面请求，或以其他方式证明您的身份。我们可能会先要求您验证自己的身份，然后再处理您的请求。我们将在15个工作日内作出答复。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              对于您合理的请求，我们原则上不收取费用。但对于多次重复、超出合理限度的请求，我们将酌情收取一定成本费用。对于那些无端重复、需要过多技术手段（例如，需要开发新系统或从根本上改变现行惯例）、给他人合法权益带来风险或者非常不切实际（例如，涉及备份磁带上存放的信息）的请求，我们可能会予以拒绝。
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. 我们如何处理未成年人的个人信息</h2>
            <p className="text-muted-foreground leading-relaxed">
              5.1 我们非常重视对未成年人个人信息的保护。若您是18周岁以下的未成年人，在使用我们的服务前，应事先取得您的父母或法定监护人的书面同意。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              5.2 对于经父母或法定监护人同意而收集未成年人个人信息的情况，我们只会在受到法律允许、父母或监护人明确同意或者保护未成年人所必要的情况下使用或公开披露此信息。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              5.3 如果我们发现自己在未事先获得可证实的父母或法定监护人同意的情况下收集了未成年人的个人信息，则会设法尽快删除相关数据。
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. 您的个人信息如何在全球范围转移</h2>
            <p className="text-muted-foreground leading-relaxed">
              我们在中华人民共和国境内运营中收集和产生的个人信息，存储在中国境内，以下情形除外：
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li>法律法规有明确规定；</li>
              <li>获得您的明确授权；</li>
              <li>您通过互联网进行跨境交易等个人主动行为。</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-2">
              针对以上情形，我们会确保依据本政策及国家法律法规的要求对您的个人信息提供足够的保护。
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. 本政策如何更新</h2>
            <p className="text-muted-foreground leading-relaxed">
              7.1 我们的隐私政策可能变更。未经您明确同意，我们不会削减您依据本隐私政策所应享有的权利。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              7.2 我们会在本页面上发布对本政策所做的任何变更。对于重大变更，我们还会提供更为显著的通知（包括对于某些服务，我们会通过电子邮件或系统推送发送通知，说明隐私政策的具体变更内容）。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              7.3 本政策所指的重大变更包括但不限于：
            </p>
            <ol className="text-muted-foreground space-y-1 list-decimal list-inside">
              <li>我们的服务模式发生重大变化。如处理个人信息的目的、处理的个人信息类型、个人信息的使用方式等；</li>
              <li>我们在所有权结构、组织架构等方面发生重大变化。如业务调整、破产并购等引起的所有者变更等；</li>
              <li>个人信息共享、转让或公开披露的主要对象发生变化；</li>
              <li>您参与个人信息处理方面的权利及其行使方式发生重大变化；</li>
              <li>我们负责处理个人信息安全的责任部门、联络方式及投诉渠道发生变化；</li>
              <li>个人信息安全影响评估报告表明存在高风险时。</li>
            </ol>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. 如何联系我们</h2>
            <p className="text-muted-foreground leading-relaxed">
              如您对本政策或您的个人信息相关事宜有任何疑问、意见或建议，请通过以下方式与我们联系：
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li><strong>邮箱：</strong>customerservices@itutorai.com</li>
              <li><strong>电话：</strong>0755-82472601</li>
              <li><strong>邮寄地址：</strong>深圳市罗湖区国际商品交易大厦7C11</li>
            </ul>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
