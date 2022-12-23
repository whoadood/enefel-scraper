import crypto from "crypto";
export const formatTeam = (team) => team.replace(team.charAt(0), team.charAt(0).toUpperCase());
export const createHash = (token) => {
    return crypto.createHash("sha256").update(token).digest("hex");
};
export const generateEmailTemplate = (token) => {
    return `<body
    style="background-color:#222426;display:flex;flex-direction:column;padding:2rem;gap:1rem;text-align:center;align-items:center;min-height:40rem;"
  >
    <div style="display:flex;flex-direction:column;">
      <h2 style="margin-bottom:1rem;font-size:2rem">Welcome to <a href="#" style="font-size:2rem;color:rgb(130, 6, 213);text-decoration:none;">EnEfEl.gg</a></h2>
      <p style="font-size:1rem;">Thanks for registering for access to the
        <a href="#" style="color:rgb(130, 6, 213);text-decoration:none;">EnEfEl.gg</a>
        API, we're excited for you to get building!</p>
    </div>
    <div style="display:flex;flex-direction:column;"></div>
      <span style="font-weight: bold; font-size:1rem; ">Heres your API access key, remember to
        keep this private and safe:
      </span>
      <div style="border-radius:5px;padding:1rem;margin-top:1rem;background-color:rgba(0,0,0,0.5)" >
        <span style="font-size:.6rem; display:flex;justify-content:center;align-items:center;color:rgb(3,218,96" >${token}</span>
      </div>
      <p style="font-size:1rem;" >If you lose or compromise your credentials you can refresh your token
        at any time.</p>
    </div>
    <div style="display:flex;flex-direction:column;"></div>
      <a style="font-size:1rem; background-color:rgb(130, 6, 213);margin-bottom:1rem;color:#fff;padding:1rem;border-radius:5px;font-weight:bold;text-decoration:none;" href="#">Refresh credentials</a>
    </div>
  </body>`;
};
