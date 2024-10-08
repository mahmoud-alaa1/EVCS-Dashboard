import MoreIcon from "../../../icons/MoreIcon";
import OnItsWayIcon from "../../../icons/OnItsWayIcon";
import PaymentIcon from "../../../icons/PaymentIcon";
import RequestIcon from "../../../icons/RequestIcon";

const ChargeLog = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <div className="flex items-center gap-2">
        <span className="text-green-200">
          <RequestIcon />
        </span>
        <div className="-space-y-1">
          <p className="text-light-green-900">
            John <span className="text-light-green-700">Requested</span> an
            urgent charge
          </p>
          <span className="text-xs text-light-green-700">
            21 Jun 2024, 5:22 AM
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-green-200">
          <OnItsWayIcon />
        </span>
        <div className="-space-y-1">
          <p className="text-light-green-900">
            Van <span className="text-light-green-700">Started</span> charging
          </p>
          <span className="text-xs text-light-green-700">
            21 Jun 2024, 5:22 AM
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-green-200">
          <PaymentIcon />
        </span>
        <div className="-space-y-1">
          <p className="text-light-green-900">
            John <span className="text-light-green-700">Renewed</span> his
            subscription
          </p>
          <span className="text-xs text-light-green-700">
            21 Jun 2024, 5:22 AM
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-green-200">
          <MoreIcon />
        </span>
        <div className="-space-y-1">
          <p className="text-light-green-900">View more Activity</p>
          <span className="text-xs text-light-green-700">
            21 Jun 2024, 5:22 AM
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChargeLog;
