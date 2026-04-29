import OurServices from "../../features/services/OurServices";
import Pane from "../../components/Pane";

function page() {
  return (
    <div>
      <Pane
        title="خدماتنا"
        details="عملكم محل اهتمامنا لذلك نقدم لكم مجموعة من الخدمات المتميزة لنساهم في تنمية أعمالكم"
      />
      <OurServices />
    </div>
  );
}

export default page;
