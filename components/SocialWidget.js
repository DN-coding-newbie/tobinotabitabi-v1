import { siteConfig } from "@/data/config";

export default function SocialWidget() {
  const { facebook, instagram, linkedin, youtube } = siteConfig.social;

  return (
    <div className="widget social">
      <h3>SOCIALS</h3>
      <div className="social-row">
        {facebook && (
          <a href={facebook} target="_blank" rel="noopener noreferrer" title="Facebook">
            FB
          </a>
        )}
        {instagram && (
          <a href={instagram} target="_blank" rel="noopener noreferrer" title="Instagram">
            IG
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
            IN
          </a>
        )}
        {youtube && (
          <a href={youtube} target="_blank" rel="noopener noreferrer" title="Youtube">
            YT
          </a>
        )}
      </div>
    </div>
  );
}
