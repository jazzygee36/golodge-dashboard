import HomeButton from "@/components/button";
import Notice from "@/features/notifications/notice";
import NotificationControl from "@/features/notifications/notice-control";

const Notification = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-[28px] text-[#292D32] font-medium"> Notifications</h1>
        <HomeButton
          title={"View New Notifications"}
          type={"submit"}
          bg={"#3F6FB9"}
          width={"135px"}
          height={"40px"}
        />
      </div>
      <div className='flex gap-7 mt-[32px]'>
        <NotificationControl/>
        <Notice/>
      </div>
    </div>
  );
};

export default Notification;
