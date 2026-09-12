import AboutWidget from "./AboutWidget";
import ArchivesWidget from "./ArchivesWidget";
import CategoriesWidget from "./CategoriesWidget";
import TagsWidget from "./TagsWidget";
import SubscribeWidget from "./SubscribeWidget";
import SocialWidget from "./SocialWidget";

export default function Sidebar() {
  return (
    <aside>
      <AboutWidget />
      <ArchivesWidget />
      <CategoriesWidget />
      <TagsWidget />
      <SubscribeWidget />
      <SocialWidget />
    </aside>
  );
}
