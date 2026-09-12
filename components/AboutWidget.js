import { siteConfig } from "@/data/config";

export default function AboutWidget() {
  return (
    <div className="widget about">
      <h3>Về mình</h3>
      <div className="about-photo">[Ảnh chân dung]</div>
      <strong>
        {siteConfig.author} / {siteConfig.authorShort}
      </strong>
      {siteConfig.aboutText.split("\n\n").map((para, i) => (
        <p key={i}>{para}</p>
      ))}
    </div>
  );
}
