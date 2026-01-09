import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const UserAgreement = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" />
            返回首页
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
          <h1 className="text-3xl font-bold mb-8 text-foreground">Tutor Jolly用户协议</h1>

          <p className="text-muted-foreground leading-relaxed mb-8">
            重要提示：请您（下称"用户"或"您"）仔细阅读本《Tutor Jolly用户协议》（下称"本协议"）各条款，特别是免除或限制责任的条款，以及开通或使用某项服务的单独协议。您对本应用的下载、安装、注册、登录、使用等行为即视为您已阅读并同意受本协议的约束。如您不同意本协议的任何内容，请立即停止使用本应用及相关服务。
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-foreground">1. 协议的范围与确认</h2>
            <p className="text-muted-foreground mb-3">
              1.1 本协议是您与深圳市播闪科技有限公司（注册于深圳，运营Tutor Jolly应用，下称"Tutor Jolly"或"我们"）之间关于您下载、安装、使用本应用，注册、使用相关服务所订立的协议。
            </p>
            <p className="text-muted-foreground mb-3">
              1.2 本应用及相关服务可能涉及由我们的关联方、第三方运营的模块或服务，您使用该等服务时，应同时遵守该等服务提供方的协议与规则。
            </p>
            <p className="text-muted-foreground mb-3">
              1.3 您承诺在开始使用本服务时已是具有完全民事行为能力的自然人。若您未满18周岁，则应在法定监护人监护、指导下阅读本协议，并在取得法定监护人的同意后使用本服务。
            </p>
            <p className="text-muted-foreground mb-3">
              1.4 我们有权根据需要不时地制订、修改本协议及/或各类规则，并以网站公示、App推送、站内信等方式进行公告，不再单独通知您。变更后的协议和规则一经公布，立即自动生效。如您不同意相关变更，应当立即停止使用本服务；如您继续使用本服务，即表示您已接受经修订的协议和规则。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-foreground">2. 账户注册与管理</h2>
            <p className="text-muted-foreground mb-3">
              2.1 您注册时，应提供真实、准确、完整、合法的注册资料，并及时更新。如因注册信息不实或未及时更新而引起的问题，我们不承担任何责任，并有权暂停或终止向您提供服务。
            </p>
            <p className="text-muted-foreground mb-3">
              2.2 您的账户仅限于您本人使用，未经我们书面同意，禁止以任何形式赠与、借用、出租、转让、售卖或以其他方式许可他人使用该账户。
            </p>
            <p className="text-muted-foreground mb-3">
              2.3 您应妥善保管账户信息及密码，并对您账户下的一切行为（包括但不限于言论发表、消费购买、信息修改等）承担责任。如发现任何未经授权使用您账户登录本应用或其他可能导致账户遭窃、遗失的情况，建议您立即通知我们。您理解我们对任何请求采取行动均需要合理时间，且我们采取的行动可能无法避免或防范侵害后果的形成或扩大，除我们存在法定过错外，我们不承担责任。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-foreground">3. 服务内容与购买</h2>
            <p className="text-muted-foreground mb-3">
              3.1 Tutor Jolly提供包括AI智能导师互动、在线课程、学习工具等在内的数字教育服务。部分核心服务需要您注册并购买VIP会员后方可使用。
            </p>
            <p className="text-muted-foreground mb-3">
              3.2 VIP会员服务为自动续费订阅服务。在免费试用期（如有）结束后，如您未主动取消，将自动转为付费订阅周期（月/季/年）。我们将在每个周期到期前通过站内消息、短信或邮件等方式提醒您。
            </p>
            <p className="text-muted-foreground mb-3">3.3 取消订阅与退款：</p>
            <p className="text-muted-foreground mb-3">
              您可以在当前订阅周期结束前至少24小时，通过App内"账户管理-订阅管理"或联系客服（customerservices@itutorai.com）取消自动续费。取消后，当前已付费周期可继续使用至到期，到期后不再续费。
            </p>
            <p className="text-muted-foreground mb-3">
              数字商品与服务特殊性：根据《中华人民共和国民法典》、《中华人民共和国消费者权益保护法》及相关规定，您购买的VIP会员服务属于在线下载或用户拆封后不宜退货的数字化商品。一旦购买成功，除法律法规明确规定或本协议另有约定外，我们不提供退换服务。
            </p>
            <p className="text-muted-foreground mb-3">
              3.4 所有付费服务应在您支付完成后享受。我们委托的第三方支付平台将处理支付流程，支付过程中产生的疑问请联系支付平台客服。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-foreground">4. 用户行为规范</h2>
            <p className="text-muted-foreground mb-3">
              您承诺并保证在使用本服务过程中遵守中华人民共和国相关法律法规（包括但不限于《中华人民共和国网络安全法》、《中华人民共和国数据安全法》、《中华人民共和国个人信息保护法》等），并遵守以下行为规范：
            </p>
            <p className="text-muted-foreground mb-3">
              4.1 不得利用本应用从事任何危害国家安全、泄露国家秘密、颠覆国家政权、破坏国家统一、损害国家荣誉和利益的活动。
            </p>
            <p className="text-muted-foreground mb-3">
              4.2 不得发表、传送、传播、储存侵害他人知识产权、商业秘密、肖像权、隐私权等合法权利的内容。
            </p>
            <p className="text-muted-foreground mb-3">
              4.3 不得发表、传送、传播、储存任何骚扰性的、中伤他人的、辱骂性的、恐吓性的、庸俗淫秽的、虚假的、欺诈的或其他任何违反公序良俗、社会公德以及法律法规禁止的内容。
            </p>
            <p className="text-muted-foreground mb-3">
              4.4 不得从事任何破坏本应用服务公平性环境的行为，包括但不限于利用漏洞、外挂、机器人程序等非法手段获取利益、干扰服务正常运行。
            </p>
            <p className="text-muted-foreground mb-3">
              4.5 不得进行任何破坏网络安全的行为，包括但不限于：使用未经许可的数据或进入未经许可的服务器/账户；未经允许进入公众计算机网络或者他人计算机系统并删除、修改、增加存储信息；未经许可，企图探查、扫描、测试本应用系统或网络的弱点或其它实施破坏网络安全的行为。
            </p>
            <p className="text-muted-foreground mb-3">
              4.6 不得利用本应用进行任何不利于Tutor Jolly的行为，或为任何非法目的而使用网络服务系统。
            </p>
            <p className="text-muted-foreground mb-3">
              4.7 如您违反上述规定，我们有权独立判断并立即暂停或终止对您的服务，采取限制、冻结、关闭账户等措施，并有权追究您的法律责任。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-foreground">5. 知识产权</h2>
            <p className="text-muted-foreground mb-3">
              5.1 我们是本应用的知识产权权利人。本应用的一切著作权、商标权、专利权、商业秘密等知识产权，以及与本应用相关的所有信息内容（包括但不限于文字、图片、音频、视频、图表、界面设计、版面框架、有关数据或电子文档等）均受中华人民共和国法律法规和相应的国际条约保护，我们依法享有上述相关知识产权。
            </p>
            <p className="text-muted-foreground mb-3">
              5.2 未经我们或相关权利人书面同意，您不得为任何商业或非商业目的自行或许可任何第三方实施、利用、转让上述知识产权。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-foreground">6. 免责声明</h2>
            <p className="text-muted-foreground mb-3">
              6.1 您理解并同意：本应用及相关服务可能会受多种因素的影响或干扰，我们不保证（包括但不限于）：
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-3">
              <li>本应用完全适合用户的所有使用要求；</li>
              <li>本应用不受干扰，及时、安全、可靠或不出现错误；用户经由我们取得的软件、服务或其他材料符合用户的期望；</li>
              <li>本应用中任何错误都将能得到更正。</li>
            </ul>
            <p className="text-muted-foreground mb-3">
              6.2 您理解并同意：使用本应用下载或取得的任何资料，其风险由您自行承担；因该等使用导致您电脑系统损坏或资料流失，您应自己负完全责任。
            </p>
            <p className="text-muted-foreground mb-3">
              6.3 您应对本应用中的内容自行加以判断，并承担因使用内容而引起的所有风险。我们不对因用户行为导致的任何损失或损害承担责任。
            </p>
            <p className="text-muted-foreground mb-3">
              6.4 我们对于任何包含、经由或连接、下载或从任何与有关本应用所获得的任何内容、信息或广告，不声明或保证其正确性或可靠性；并且对于您经本应用上的广告、展示而购买、取得的任何产品、信息或资料，不负任何担保责任。您自行承担使用此类信息或资料的风险。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-foreground">7. 服务的变更、中断、终止</h2>
            <p className="text-muted-foreground mb-3">
              7.1 您理解并同意，我们基于经营策略的调整，可能会对服务内容进行变更，也可能会中断、中止或终止服务。
            </p>
            <p className="text-muted-foreground mb-3">
              7.2 如发生下列任何一种情形，我们有权不经通知而中断或终止向您提供服务：
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-3">
              <li>根据法律规定您应提交真实信息，而您提供的个人资料不真实、或与注册时信息不一致又未能提供合理证明；</li>
              <li>您违反相关法律法规或本协议的约定；</li>
              <li>按照法律规定或主管部门的要求；</li>
              <li>出于安全的原因或其他必要的情形。</li>
            </ul>
            <p className="text-muted-foreground mb-3">
              7.3 您有权通过注销账户的方式终止本协议。服务终止后，我们有权继续保存您的注册信息及使用本服务期间的全部信息。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-foreground">8. 法律适用、管辖与其他</h2>
            <p className="text-muted-foreground mb-3">
              8.1 本协议的成立、生效、履行、解释及纠纷解决，适用中华人民共和国大陆地区法律（不包括冲突法）。
            </p>
            <p className="text-muted-foreground mb-3">
              8.2 若您和我们之间发生任何纠纷或争议，首先应友好协商解决；协商不成的，您同意将纠纷或争议提交本协议签订地（即深圳市南山区）有管辖权的人民法院管辖。
            </p>
            <p className="text-muted-foreground mb-3">
              8.3 本协议中的任何条款无论因何种原因完全或部分无效或不具有执行力，其余条款仍应有效并且有约束力。
            </p>
            <p className="text-muted-foreground mb-3">
              8.4 本协议构成双方就本协议所涉事项达成的完整协议，并取代双方此前就本协议所涉事项达成的所有口头和书面的协议、合同、谅解和通信。
            </p>
            <p className="text-muted-foreground mb-3">
              8.5 我们于您过失或违约时放弃本协议规定的权利的，不得视为我们对您的其他或以后同类之过失或违约行为弃权。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-foreground">9. 联系我们</h2>
            <p className="text-muted-foreground mb-3">
              如您对本协议内容或使用我们的服务有任何疑问、意见或建议，请通过以下方式联系我们：
            </p>
            <p className="text-muted-foreground mb-3">
              客服邮箱：customerservices@itutorai.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserAgreement;
