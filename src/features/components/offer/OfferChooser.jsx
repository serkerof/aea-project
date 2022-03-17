import { useState } from "react";
import Offer from "./Offer";
import OfferDialog from "./OfferDialog";

const OfferChooser = () => {
  const [status, setStatus] = useState(false);

  return (
    <div>
      {status ? (
        <OfferDialog setStatus={setStatus} />
      ) : (
        <Offer setStatus={setStatus} />
      )}
    </div>
  );
};

export default OfferChooser;
