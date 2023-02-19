/** @param {import("../NetscriptDefinitions").NS } ns */
export async function main(ns) {
  const { tprint } = ns;
  let neighbor = ns.scan();

  for (let i = 0; i < neighbor.length; i++) {
      const hostName = neighbor[i]
      const playerHackingLevel = ns.getHackingLevel()
      const serverHackingLevel = ns.getServerRequiredHackingLevel(hostName)
      const serverMoney = ns.getServerMoneyAvailable(hostName)
      const serverSecurityLevel = ns.getServerSecurityLevel(hostName)
      const serverMinSecurityLevel = ns.getServerMinSecurityLevel(hostName)


    while (ns.hasRootAccess(hostName) && serverHackingLevel <= playerHackingLevel) {
      if (serverSecurityLevel > serverMinSecurityLevel) {
        tprint("Attempting to weaken: ", hostName)
        const weakenResults = await ns.weaken(hostName)
        tprint("Weaken results: ", weakenResults)
      }else if (serverMoney < 5000 && !(serverMoney >= 5000000)) {
          tprint("Attempting to grow: ", hostName)
          const growResults = await ns.grow(hostName)
          tprint("Grow results: ", growResults)
      }else {
        tprint("Attemping to hack: ", hostName)
        const hackResults = await ns.hack(hostName);
        tprint("hack results: ", hackResults)
      }
    } 
  }
}




