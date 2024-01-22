import AppLayout from "@containers/AppLayout";
import SettingsEdit from "@containers/Settings/SettingsEdit";
import NavBack from "@components/NavBack";

const SettingsEditPage = () => {
  return (
    <AppLayout>
      <NavBack />
      <SettingsEdit />
    </AppLayout>
  );
};

export default SettingsEditPage;
