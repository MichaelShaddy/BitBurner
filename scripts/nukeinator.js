/** @param {import("../NetscriptDefinitions").NS } ns */
export async function main(ns) {
    const { tprint } = ns;
  
    ns.tprint("Neighbors of current server.");
    let neighbor = ns.scan();
    for (let i = 0; i < neighbor.length; i++) {
      const hostName = neighbor[i] 
      ns.tprint(hostName);
      ns.nuke(hostName)
    }
  }
  
  // open ports :)