/** @param {import("../NetscriptDefinitions").NS } ns */
export async function main(ns) {
  const { tprint } = ns;
  let neighbor = ns.scan();

  for (let i = 0; i < neighbor.length; i++) {
      const hostName = neighbor[i]
      const playerHackingLevel = ns.getHackingLevel()
      const serverHackingLevel = ns.getServerRequiredHackingLevel(hostName)

      if (ns.hasRootAccess(hostName) && serverHackingLevel <= playerHackingLevel) {
        tprint("Attemping to hack:", hostName)
        const hackResults = await ns.hack(hostName);
        tprint("hack results:", hackResults)
      } else {
        tprint(`Cannot Hack Server: ${hostName} :(${serverHackingLevel})`)
      }

    }

}

