import { siteConfig } from "@/data/config";

export default function AboutWidget() {
  return (
    <div className="widget about">
      <h3>About me</h3>
      <div className="about-photo">
        <img src="/images/profile/avatar-blog.jfif" alt="Tobi" />
        </div>
      <strong>
        {siteConfig.author} / {siteConfig.authorShort}
      </strong>
      {siteConfig.aboutText.split("\n\n").map((para, i) => (
        <p key={i}>{para}</p>
      ))}
    </div>
  );
}
