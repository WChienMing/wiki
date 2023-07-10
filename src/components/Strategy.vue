<template>
    <div>
        <Header />
        <nav class="breadcrumb-wrapper">
            <div class="container-fluid">
            <ol class="breadcrumb" itemscope itemtype="https://schema.org/BreadcrumbList">
                <li class="breadcrumb-item" itemprop="itemListElement"><a itemprop="item" href="/"><span itemprop="name">Main</span></a>
                        <meta itemprop="position" content="1" />
                </li>
                <li class="breadcrumb-item" itemprop="itemListElement"><a itemprop="item" href="/Strategy"><span itemprop="name">Browser</span></a></li>
                <li class="breadcrumb-item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"><span itemprop="name">Strategy</span><meta itemprop="position" content="3" /></li>
            </ol>
            </div>
        </nav>
        <div class="main v2">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 mx-auto">
                        <h2>HV-MTL</h2>
                        <p>Welcome to the captivating world of HV-MTL, where you will become a master of mech construction and management. Immerse yourself in an adventure that blends strategic planning and resource management, offering endless possibilities. Explore a futuristic universe filled with hidden blueprints and thrilling challenges.</p>
                        <p>With a unique set of initial blueprints, unleash your creative potential to construct awe-inspiring mechs. Strategically place tiles, upgrade structures, and embark on a journey to construct teleportation gates, unlocking new realms to conquer. Collect energy, form alliances, and engage with the vibrant community to chart your path to victory. Get ready to conquer the Mech World in HV-MTL.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="apecointopics">
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <a class="apeoptions" @click="currentTopic = 'protocol'" :class="{active: currentTopic === 'protocol'}">HV-MTL</a>
                <a class="apeoptions" @click="currentTopic = 'allocation'" :class="{active: currentTopic === 'allocation'}">Novice teaching</a>
                <a class="apeoptions" @click="currentTopic = 'distribution'" :class="{active: currentTopic === 'distribution'}">Comparison table</a>
            </div>
            <div class="col-md-9">
                <div id="values">
                    <div id="protocol" class="content" v-show="currentTopic === 'protocol'">
                        <h4>The forging room and gameplay of HV-MTL</h4>
                        <div class="item">
                            <p>First off, the HV-MTL Forge game started out as a hybrid of a pet game and a world-building game, and over time, you'll find that the game eventually turns into a very competitive dungeon crawler.
                            HV will evolve into EVO2 according to you. During the process, you can determine the final form of your EVO2 by winning up to 6 powerful upgrade materials.
                            You'll complete the upgrades through your forge, which will also produce the energy needed to explore the space rift, and of course HV will be happier through this!
                            Your forging room will be affected by other players' votes every day. As time goes by, the number of votes for your forging room will be counted in three weeks, and the fate of your forging room will be determined by these votes.
                            6 quarters, 6 chances to upgrade</p>
                        </div>
                        <div class="item">
                            <img src="../assets/strategy/b_u_f.png" style="display: block; object-fit: cover; border-radius: 1px; pointer-events: auto; width: 100%;">
                            <br>
                            <p>Create your forge</p>
                            <p>Do what you do best - socialize and make your community even more exciting!</p>
                            <p>Of course, the number of votes can increase energy and unlock rewards on and off the chain</p>
                        </div>
                        <div class="item">
                            <img src="../assets/strategy/f_f_v.png" style="display: block; object-fit: cover; border-radius: 1px; pointer-events: auto; width: 100%;">
                            <br>
                            <p>Show your votes</p>
                            <p>Use your artistic talent to build your ideal forge</p>
                            <p>If you don't know how to build it, it doesn't matter, you can check the rankings to see how to build it</p>
                        </div>
                        <div class="item">
                            <img src="../assets/strategy/w_u.png" style="display: block; object-fit: cover; border-radius: 1px; pointer-events: auto; width: 100%;">
                            <br>
                            <p>Earn upgrade rewards</p>
                            <p>Collect up to 6 HV-MTL Amps. The higher your reputation, the rarer your AMPs</p>
                            <p>You need to have 3 AMPs to upgrade to EVO2</p>
                        </div>
                        <div class="item">
                            <img src="../assets/strategy/t_r_e.png" style="display: block; object-fit: cover; border-radius: 1px; pointer-events: auto; width: 100%;">
                            <br>
                            <p>Crack schedule</p>
                            <p>1. Go beyond your forge: After three seasons, a new singularity will open, but... only for some people, the energy you produce determines whether you can enter and go further</p>
                            <p>explore, survive, prepare</p>
                            <p>1. Explore the Rift's secrets, dangers, and rewards. Craft legendary gear to prepare for the next challenge.</p>
                            <p>fight to the end</p>
                            <p>- Epic fortunes are around the corner, and of course, monsters corresponding to fortunes will also appear</p>
                            <p>- Compete with other HV-MTL holders for treasure. Your time and loot are limited, so it's up to you to defeat these bosses before the rift closes</p>
                        </div>
                        <div class="item">
                            <img src="../assets/strategy/t_g.png" style="display: block; object-fit: cover; border-radius: 1px; pointer-events: auto; width: 100%;">
                            <br>
                            <p>This guide will show you how to generate the most energy, get your HV in a good mood, and create a beautiful forge that can climb the ranks</p>
                        </div>
                        <div class="item">
                            <img src="../assets/strategy/y_y_y.png" style="display: block; object-fit: cover; border-radius: 1px; pointer-events: auto; width: 100%;">
                            <br>
                            <p>Three categories</p>
                            <p>1. You hold BAYC, MAYC, BAKC</p>
                            <p>- There will be different props in the store in the second season, these props will make you stand out, and BAYC, MAYC, BAKC will all have empowerments in the crack</p>
                            <p>You hold HV-MTL</p>
                            <p>- Each forge will have a different scene for your HV-MTL, which further differentiates your creations. Each HV will have their own starter pack and they will also function when the rift is open, each with its own unique ability. But remember, it's up to you how to attract votes through the design of the forge</p>
                            <p>3. You have elves</p>
                            <p>- These sprites have unique benefits when the rift is open</p>
                        </div>
                    </div>
                    <div id="allocation" class="content" :class="{ 'is-visible': currentTopic === 'allocation' }">                   
                        <div class="team-area">
                            <div class="row no-gutters">
                                <div class="col-md-6">
                                    <div class="team-member">
                                        <video width="450" height="280" controls>
                                        <source src="../assets/strategy/video.mp4" type="video/mp4">
                                        </video>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="team-member">
                                        <b>The place to start — the Blacksmithing Table</b>
                                        <span>Your forge holds construction blueprints that your HV can use to build, expand, and decorate your forge.
                                        When you first start out, all you have are some basic bricks and blueprints for decorative items. But you can unlock new blueprints by discovering and completing hidden quests!
                                        You can discover these hidden quests by building, upgrading or destroying a certain number of floor tiles
                                        Once you unlock the new blueprint, you can see these new items in the craftable slot.</span>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="team-member">
                                        <img src="../assets/strategy/t_a_d.png" style="display: block; object-fit: cover; border-radius: 1px; pointer-events: auto; width: 100%;">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="team-member">
                                        <b>Bricks and decorative items</b>
                                        <span>You can build many different bricks and decorative items using the blueprints you find.

                                        Please think carefully about how to place your bricks and decorations, because once built, you can't move it, you can only turn it without consuming energy.

                                        You can also destroy a brick by clicking on the brick and hitting "delete". But you have to think carefully before you start destroying because destroying a brick will also destroy any decorative objects you put on the brick.

                                        Ornaments can also be rotated like bricks. Click on the brick where the decoration is located, and select the "Objects" tab. From there, you can rotate or delete your decorations without spending energy.

                                        Only one decoration can be placed on each brick. If you decide to build another decoration on a brick that already has a decoration, the new decoration will replace the previous one.

                                        If you want to upgrade the level of a brick, click on it and select the upgrade option.</span>
                                    </div>
                                </div>
                                <br>
                                <div class="col-md-6">
                                    <div class="team-member">
                                        <b>Energy</b>
                                        <span>The main resource of the game is energy. You'll use him to build bricks and decorations.
                                        You can see how much energy you have on the display in the upper left corner.
                                        The different HV-MTLs will all start with a special bonus pack, which gives an extra advantage early on. (Note: try not to use this bonus pack early on)
                                        The maximum power is determined by the level of your portal. Want to increase your energy ceiling? Then build more bricks, level up those bricks, and then unlock and upgrade your portals.
                                        NOTE: If you close your previewer, your game will be forced to pause. Make sure to keep your previewer open if you want your game to run continuously. Of course even if you turn off your previewer, your HV will still collect portal energy every two hours.</span>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="team-member">
                                        <img src="../assets/strategy/e_n_e.png" style="display: block; object-fit: cover; border-radius: 1px; pointer-events: auto; width: 100%;">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="team-member">
                                        <img src="../assets/strategy/b_i.png" style="display: block; object-fit: cover; border-radius: 1px; pointer-events: auto; width: 100%;">
                                        <b>You can see the amount of energy in the upper left corner, and the various fields in the lower right corner</b>
                                    </div>
                                </div>
                                <br>
                                <div class="col-md-6">
                                    <div class="team-member">
                                        <img src="../assets/strategy/e_n_e.png" style="display: block; object-fit: cover; border-radius: 1px; pointer-events: auto; width: 100%;">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="team-member">
                                        <b>By upgrading the bricks your HV can collect more energy</b>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="team-member">
                                        <img src="../assets/strategy/s_w_t_g.png" style="display: block; object-fit: cover; border-radius: 1px; pointer-events: auto; width: 100%;">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="team-member">
                                        <b>Increase energy by getting your HV in a good mood</b>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="team-member">
                                        <img src="../assets/strategy/s_w_t_g_v.png" style="display: block; object-fit: cover; border-radius: 1px; pointer-events: auto; width: 100%;">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="team-member">
                                        <b>Energy can also be increased through ranking</b>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="team-member">
                                        <b>Operations and shortcut keys</b>
                                        <span>The game centers on a grid of bricks.
                                        By clicking and dragging the mouse to the direction of your choice, you can move the screen vertically and horizontally to view your bricks.
                                        Tap on bricks and HVs to interact with them.</span>
                                        <br>
                                        <br>
                                        <table>
                                        <tr>
                                            <th>Action</th>
                                            <th>Key</th>
                                        </tr>
                                        <tr>
                                            <td>Add Block/Decoration</td>
                                            <td>A</td>
                                        </tr>
                                        <tr>
                                            <td>Open Blueprint Options</td>
                                            <td>B</td>
                                        </tr>
                                        <tr>
                                            <td>Craft</td>
                                            <td>C</td>
                                        </tr>
                                        <tr>
                                            <td>Open Voting/Ranking</td>
                                            <td>F</td>
                                        </tr>
                                        <tr>
                                            <td>Rotate View</td>
                                            <td>R</td>
                                        </tr>
                                        <tr>
                                            <td>Focus Main View</td>
                                            <td>H</td>
                                        </tr>
                                        <tr>
                                            <td>Activate Amplification Function</td>
                                            <td>P</td>
                                        </tr>
                                        <tr>
                                            <td>Open Shop</td>
                                            <td>S</td>
                                        </tr>
                                        <tr>
                                            <td>Track HV</td>
                                            <td>Spacebar</td>
                                        </tr>
                                        </table>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="team-member">
                                        <img src="../assets/strategy/c_h.png" style="display: block; object-fit: cover; border-radius: 1px; pointer-events: auto; width: 100%;">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="team-member">
                                        <img src="../assets/strategy/p_o.png" style="display: block; object-fit: cover; border-radius: 1px; pointer-events: auto; width: 100%;">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="team-member">
                                        <b>Portal</b>
                                        <span>The portal allows your HV-MTL to reach other dimensions. If you have another HV-MTL in your wallet, it can also be sent to your forging room through the portal. Each portal can invite at most one HV per day, even if you There are more than five HV-MTL in your wallet, and you can only invite up to four HV-MTL per day. When you invite one of your HV-MTLs, it increases your total energy by 10%. For example, if you invite all four of your HV-MTLs each day, you can increase your total Energy Bar by 40% for that day.

                                        Connect the portal to your forge with bricks. To activate portals, you need to upgrade them. Upgrades will help optimize your energy production.

                                        Portals are fickle machines. They only work once and then they break! Repair them regularly so your HV-MTL can use them.

                                        Once activated, your portals will store energy, and your HV-MTL will collect them even when you're not playing (as long as the portal isn't broken).

                                        When your HV-MTL travels across dimensions through the portal, they will come back in a different mood, and they can collect the energy stored in the portal.

                                        When you return from the portal from HV to get a reward, the duration of the reward corresponds to the level of the portal.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="distribution" class="content" :class="{ 'is-visible': currentTopic === 'distribution' }">
                        <div class="item">
                        <span>Floor</span>
                        <table>
                        <tr>
                            <th>Tile</th>
                            <th>Task</th>
                        </tr>
                        <tr>
                            <td>Bark</td>
                            <td>HV collected 100k energy</td>
                        </tr>
                        <tr>
                            <td>Clay</td>
                            <td>Build 15 tiles</td>
                        </tr>
                        <tr>
                            <td>Heavy Metal</td>
                            <td>Hold one level 5 tile</td>
                        </tr>
                        <tr>
                            <td>Concrete</td>
                            <td>Starting tile</td>
                        </tr>
                        <tr>
                            <td>Lawn</td>
                            <td>Starting tile</td>
                        </tr>
                        <tr>
                            <td>Light Concrete</td>
                            <td>Starting tile</td>
                        </tr>
                        <tr>
                            <td>Metal</td>
                            <td>Starting tile</td>
                        </tr>
                        <tr>
                            <td>Sand</td>
                            <td>Own 5k energy</td>
                        </tr>
                        <tr>
                            <td>Watermelon</td>
                            <td>HV walked over 100 tiles</td>
                        </tr>
                        <tr>
                            <td>Wooden Floor</td>
                            <td>HV collected 100k energy</td>
                        </tr>
                        <tr>
                            <td>Grassland</td>
                            <td>Activate the second portal</td>
                        </tr>
                        </table>

                        </div>
                        <div class="item">
                            <span>Decorations</span>
                            <table>
                            <tr>
                                <th>Item Name</th>
                                <th>Unlock Condition</th>
                                <th>Unlock Category</th>
                                <th>Costs</th>
                            </tr>
                            <tr>
                                <td>Mayo jar</td>
                                <td></td>
                                <td></td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>WEN???</td>
                                <td></td>
                                <td></td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>SOON</td>
                                <td></td>
                                <td></td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>BAMBOO</td>
                                <td></td>
                                <td></td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>BBQ</td>
                                <td></td>
                                <td></td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Drying Rack</td>
                                <td></td>
                                <td></td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Basketball hoop</td>
                                <td></td>
                                <td></td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Gong</td>
                                <td></td>
                                <td></td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Conveyor Machine</td>
                                <td>3 Portals Activated</td>
                                <td>Portal</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Turning Conveyor Belt</td>
                                <td>3 Portals Activated</td>
                                <td>Portal</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Sandwich Conveyor Belt</td>
                                <td>3 Portals Activated</td>
                                <td>Portal</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Conveyor Belt</td>
                                <td>3 Portals Activated</td>
                                <td>Portal</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Pipe (Source)</td>
                                <td>You own 5 tiles that are level 5</td>
                                <td>Tiles</td>
                                <td>30000</td>
                            </tr>
                            <tr>
                                <td>Pipe (Turn)</td>
                                <td>You own 5 tiles that are level 5</td>
                                <td>Tiles</td>
                                <td>30000</td>
                            </tr>
                            <tr>
                                <td>Pipe (Straight)</td>
                                <td>You own 5 tiles that are level 5</td>
                                <td>Tiles</td>
                                <td>30000</td>
                            </tr>
                            <tr>
                                <td>Rotary Saw</td>
                                <td>Used 5 Powerups</td>
                                <td>Powerup</td>
                                <td>5000</td>
                            </tr>
                            <tr>
                                <td>Spike Trap</td>
                                <td>Hovered over 100k Tiles</td>
                                <td>Tiles</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Automatic Turnstile</td>
                                <td>You Voted 5 Days In A Row</td>
                                <td>Vote</td>
                                <td>30000</td>
                            </tr>
                            <tr>
                                <td>Boxing Glove</td>
                                <td>You Scored 45pts in the Cycle Leaderboard</td>
                                <td>Leaderboard</td>
                                <td>80000</td>
                            </tr>
                            <tr>
                                <td>Toiletpaper</td>
                                <td>HV destroyed 25 tiles or objects</td>
                                <td>Tiles</td>
                                <td>30000</td>
                            </tr>
                            <tr>
                                <td>Pointing Finger</td>
                                <td></td>
                                <td></td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Servers</td>
                                <td>HV hovered over 1000</td>
                                <td>Tiles</td>
                                <td>30000</td>
                            </tr>
                            <tr>
                                <td>Computer</td>
                                <td>1 Portal Activated</td>
                                <td>Portal</td>
                                <td>5000</td>
                            </tr>
                            <tr>
                                <td>Plug Seat</td>
                                <td>1 Portal Activated</td>
                                <td>Portal</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Protein Barrel</td>
                                <td></td>
                                <td></td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Turntables</td>
                                <td>You Scored 30pts in the Cycle Leaderboard</td>
                                <td>Leaderboard</td>
                                <td>30000</td>
                            </tr>
                            <tr>
                                <td>Speakers</td>
                                <td>You Scored 30pts in the Cycle Leaderboard</td>
                                <td>Leaderboard</td>
                                <td>30000</td>
                            </tr>
                            <tr>
                                <td>Killer Robot</td>
                                <td></td>
                                <td></td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Stream Cam</td>
                                <td>HV Generated 3M Energy</td>
                                <td>Energy</td>
                                <td>250000</td>
                            </tr>
                            <tr>
                                <td>Security Ropes (Corner)</td>
                                <td>You Scored 15pts in the Cycle Leaderboard</td>
                                <td>Leaderboard</td>
                                <td>5000</td>
                            </tr>
                            <tr>
                                <td>Security Ropes</td>
                                <td>You Scored 15pts in the Cycle Leaderboard</td>
                                <td>Leaderboard</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Big Cannon</td>
                                <td>HV destroyed 5 tiles or objects</td>
                                <td>Tiles</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Arcade Game</td>
                                <td>5 Objects Built</td>
                                <td>Objects</td>
                                <td>30000</td>
                            </tr>
                            <tr>
                                <td>Shelves</td>
                                <td>You voted 3 times in a day</td>
                                <td>Vote</td>
                                <td>30000</td>
                            </tr>
                            <tr>
                                <td>Lab Shelves</td>
                                <td>20 Objects Built</td>
                                <td>Objects</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Closed Window</td>
                                <td>20 Objects Built</td>
                                <td>Objects</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Desert Plant</td>
                                <td>200 Tiles or Objects Destroyed</td>
                                <td>Tiles or Objects</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Lolliplant</td>
                                <td>You voted 10 days in a row</td>
                                <td>Vote</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Wild Mushrooms</td>
                                <td>You voted 5 times in a day</td>
                                <td>Vote</td>
                                <td>80000</td>
                            </tr>
                            <tr>
                                <td>Toxic Tank</td>
                                <td></td>
                                <td></td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Spikes</td>
                                <td>You own 10 tiles that are level 10</td>
                                <td>Tiles</td>
                                <td>80000</td>
                            </tr>
                            <tr>
                                <td>Cameras</td>
                                <td>You voted 8 times in a day</td>
                                <td>Vote</td>
                                <td>250000</td>
                            </tr>
                            <tr>
                                <td>Fence (Corner)</td>
                                <td>HV Generated 750k Energy</td>
                                <td>Energy</td>
                                <td>80000</td>
                            </tr>
                            <tr>
                                <td>Fence</td>
                                <td>HV Generated 750k Energy</td>
                                <td>Energy</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Minion</td>
                                <td>100 Tiles destroyed</td>
                                <td>Tiles</td>
                                <td>700000</td>
                            </tr>
                            <tr>
                                <td>Frog Tank</td>
                                <td>1 Object Built</td>
                                <td>Objects</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Toy Box</td>
                                <td>HV Generated 10M Energy</td>
                                <td>Energy</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Eye Flower</td>
                                <td>You have 50k Energy</td>
                                <td>Energy</td>
                                <td>30000</td>
                            </tr>
                            <tr>
                                <td>Eye Plant</td>
                                <td>200 Tiles or Objects Destroyed</td>
                                <td>Tiles or Objects</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Medusas</td>
                                <td></td>
                                <td></td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Test Tube</td>
                                <td>30 Objects Built</td>
                                <td>Objects</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Enema Bulbs</td>
                                <td>30 Objects Built</td>
                                <td>Objects</td>
                                <td>700000</td>
                            </tr>
                            <tr>
                                <td>Unknown Plant</td>
                                <td>30 Objects Built</td>
                                <td>Objects</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Palm leaves</td>
                                <td></td>
                                <td></td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Hugshrooms</td>
                                <td>Used 100 Powerups</td>
                                <td>Powerup</td>
                                <td>250000</td>
                            </tr>
                            <tr>
                                <td>Lumo Fungus</td>
                                <td></td>
                                <td></td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Wall (Posters)</td>
                                <td>5 Tiles Built</td>
                                <td>Tiles</td>
                                <td>5000</td>
                            </tr>
                            <tr>
                                <td>Wall</td>
                                <td>5 Tiles Built</td>
                                <td>Tiles</td>
                                <td>5000</td>
                            </tr>
                            <tr>
                                <td>Window</td>
                                <td>5 Tiles Built</td>
                                <td>Tiles</td>
                                <td>5000</td>
                            </tr>
                            <tr>
                                <td>Wall Corner</td>
                                <td>5 Tiles Built</td>
                                <td>Tiles</td>
                                <td>5000</td>
                            </tr>
                            <tr>
                                <td>Flowerbed</td>
                                <td>HV Generated 10k Energy</td>
                                <td>Energy</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Bed of Tubules</td>
                                <td>HV Generated 10k Energy</td>
                                <td>Energy</td>
                                <td>5000</td>
                            </tr>
                            <tr>
                                <td>Wall with Plush</td>
                                <td>HV destroyed 300 tiles or objects</td>
                                <td>Tiles</td>
                                <td>2,500,000</td>
                            </tr>
                            <tr>
                                <td>Plush</td>
                                <td>HV destroyed 300 tiles or objects</td>
                                <td>Tiles</td>
                                <td>2,500,000</td>
                            </tr>
                            <tr>
                                <td>Test Tube</td>
                                <td></td>
                                <td></td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Buried Tube</td>
                                <td></td>
                                <td></td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Trumpet Flowers</td>
                                <td>You have 50k Energy</td>
                                <td>Energy</td>
                                <td>5000</td>
                            </tr>
                            <tr>
                                <td>Small Tubulus</td>
                                <td>You made your first Vote</td>
                                <td>Vote</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Toxic Barrel</td>
                                <td>HV destroyed 75 tiles or objects</td>
                                <td>Tiles</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>TV</td>
                                <td>Used 50 Powerups</td>
                                <td>Powerup</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Workshop</td>
                                <td></td>
                                <td></td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Workshop</td>
                                <td></td>
                                <td></td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Mushroom in a Jar</td>
                                <td>HV hovered over 10k Tiles</td>
                                <td>Tiles</td>
                                <td>80000</td>
                            </tr>
                            <tr>
                                <td>Carnivorous Plant</td>
                                <td>HV hovered over 10k Tiles</td>
                                <td>Tiles</td>
                                <td>80000</td>
                            </tr>
                            <tr>
                                <td>Yellow Flower</td>
                                <td>You made your first Vote</td>
                                <td>Vote</td>
                                <td>5000</td>
                            </tr>
                            <tr>
                                <td>Liana</td>
                                <td>You voted 5 times in a day</td>
                                <td>Vote</td>
                                <td>80000</td>
                            </tr>
                            <tr>
                                <td>Cow</td>
                                <td>1 Object built</td>
                                <td>Object</td>
                                <td>5000</td>
                            </tr>
                            <tr>
                                <td>Couch</td>
                                <td>25 tiles built</td>
                                <td>Tiles</td>
                                <td>80000</td>
                            </tr>
                            <tr>
                                <td>Couch (Corner)</td>
                                <td>25 tiles built</td>
                                <td>Tiles</td>
                                <td>80000</td>
                            </tr>
                            <tr>
                                <td>Table</td>
                                <td>50 tiles built</td>
                                <td>Tiles</td>
                                <td>250000</td>
                            </tr>
                            <tr>
                                <td>Gaming Table</td>
                                <td>50 tiles built</td>
                                <td>Tiles</td>
                                <td>250000</td>
                            </tr>
                            <tr>
                                <td>Dojo Door</td>
                                <td></td>
                                <td></td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Dojo Wall</td>
                                <td></td>
                                <td></td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Dojo Corner</td>
                                <td></td>
                                <td></td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Sign (Caution)</td>
                                <td>25 tiles built</td>
                                <td>Tiles</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Sign (Turn Right)</td>
                                <td>50 Tiles built</td>
                                <td>Tiles</td>
                                <td>250000</td>
                            </tr>
                            <tr>
                                <td>Sign (Doggo Poop)</td>
                                <td>25 tiles built</td>
                                <td>Tiles</td>
                                <td>80000</td>
                            </tr>
                            <tr>
                                <td>Sign (Fomo)</td>
                                <td>50 tiles built</td>
                                <td>Tiles</td>
                                <td>250000</td>
                            </tr>
                            <tr>
                                <td>Toilet</td>
                                <td>50 Tiles destroyed</td>
                                <td>Tiles</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>HV Dance</td>
                                <td>You voted 3 days in a row</td>
                                <td>Vote</td>
                                <td>5000</td>
                            </tr>
                            </table>
                        </div>
                        <div class="item">
                            <span>Floor tile upgrade and quantity comparison table</span>
                            <table>
                                <tr>
                                    <th>Tile Level</th>
                                    <th>Energy Cost</th>
                                    <th>Time Required</th>
                                    <th>Energy Output</th>
                                </tr>
                                <tr>
                                    <td>1 → 2</td>
                                    <td>180</td>
                                    <td>0:08</td>
                                    <td>+2</td>
                                </tr>
                                <tr>
                                    <td>2 → 3</td>
                                    <td>360</td>
                                    <td>0:17</td>
                                    <td>+3</td>
                                </tr>
                                <tr>
                                    <td>3 → 4</td>
                                    <td>675</td>
                                    <td>0:33</td>
                                    <td>+4</td>
                                </tr>
                                <tr>
                                    <td>4 → 5</td>
                                    <td>1440</td>
                                    <td>1:11</td>
                                    <td>+5</td>
                                </tr>
                                <tr>
                                    <td>5 → 6</td>
                                    <td>2100</td>
                                    <td>1:44</td>
                                    <td>+8</td>
                                </tr>
                                <tr>
                                    <td>6 → 7</td>
                                    <td>3570</td>
                                    <td>2:58</td>
                                    <td>+10</td>
                                </tr>
                                <tr>
                                    <td>7 → 8</td>
                                    <td>6000</td>
                                    <td>4:59</td>
                                    <td>+14</td>
                                </tr>
                                <tr>
                                    <td>8 → 9</td>
                                    <td>9315</td>
                                    <td>7:45</td>
                                    <td>+22</td>
                                </tr>
                                <tr>
                                    <td>9 → 10</td>
                                    <td>13875</td>
                                    <td>11:33</td>
                                    <td>+37</td>
                                </tr>
                                <tr>
                                    <td>10 → 11</td>
                                    <td>22185</td>
                                    <td>18:28</td>
                                    <td>+51</td>
                                </tr>
                                <tr>
                                    <td>11 → 12</td>
                                    <td>34080</td>
                                    <td>28:21</td>
                                    <td>+71</td>
                                </tr>
                                <tr>
                                    <td>12 → 13</td>
                                    <td>50925</td>
                                    <td>42:23</td>
                                    <td>+97</td>
                                </tr>
                                <tr>
                                    <td>13 → 14</td>
                                    <td>75810</td>
                                    <td>01:03:07</td>
                                    <td>+97</td>
                                </tr>
                                <tr>
                                    <td>14 → 15</td>
                                    <td>114660</td>
                                    <td>01:35:30</td>
                                    <td>+133</td>
                                </tr>
                                <tr>
                                    <td>15 → 16</td>
                                    <td>168750</td>
                                    <td>02:20:37</td>
                                    <td>+250</td>
                                </tr>
                                <tr>
                                    <td>16 → 17</td>
                                    <td>252105</td>
                                    <td>03:30:05</td>
                                    <td>+343</td>
                                </tr>
                                <tr>
                                    <td>17 → 18</td>
                                    <td>367380</td>
                                    <td>05:06:07</td>
                                    <td>+471</td>
                                </tr>
                                <tr>
                                    <td>18 → 19</td>
                                    <td>541800</td>
                                    <td>07:31:30</td>
                                    <td>+645</td>
                                </tr>
                                <tr>
                                    <td>19 → 20</td>
                                    <td>792000</td>
                                    <td>11:03:40</td>
                                    <td>+885</td>
                                </tr>
                                </table>

                        </div>

                        <div class="item">
                            <span>Floor tile quantity comparison table</span>
                            <table>
                                <tr>
                                    <th>Tile Quantity</th>
                                    <th>Energy Cost</th>
                                    <th>Construction Time</th>
                                    <th>Total Energy</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>0</td>
                                    <td>00:01</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>30</td>
                                    <td>00:01</td>
                                    <td>30</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>38</td>
                                    <td>00:01</td>
                                    <td>68</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>48</td>
                                    <td>00:02</td>
                                    <td>116</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>58</td>
                                    <td>00:03</td>
                                    <td>174</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>74</td>
                                    <td>00:04</td>
                                    <td>248</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>92</td>
                                    <td>00:04</td>
                                    <td>340</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>116</td>
                                    <td>00:05</td>
                                    <td>456</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>142</td>
                                    <td>00:07</td>
                                    <td>598</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>180</td>
                                    <td>00:09</td>
                                    <td>778</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>192</td>
                                    <td>00:10</td>
                                    <td>970</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>200</td>
                                    <td>00:10</td>
                                    <td>1170</td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>212</td>
                                    <td>00:11</td>
                                    <td>1382</td>
                                </tr>
                                <tr>
                                    <td>14</td>
                                    <td>240</td>
                                    <td>00:12</td>
                                    <td>1622</td>
                                </tr>
                                <tr>
                                    <td>15</td>
                                    <td>360</td>
                                    <td>00:19</td>
                                    <td>1982</td>
                                </tr>
                                <tr>
                                    <td>16</td>
                                    <td>440</td>
                                    <td>00:21</td>
                                    <td>2422</td>
                                </tr>
                                <tr>
                                    <td>17</td>
                                    <td>565</td>
                                    <td>00:27</td>
                                    <td>2987</td>
                                </tr>
                                <tr>
                                    <td>18</td>
                                    <td>775</td>
                                    <td>00:38</td>
                                    <td>3762</td>
                                </tr>
                                <tr>
                                    <td>19</td>
                                    <td>1100</td>
                                    <td>00:54</td>
                                    <td>4862</td>
                                </tr>
                                <tr>
                                    <td>20</td>
                                    <td>1600</td>
                                    <td>01:20</td>
                                    <td>6462</td>
                                </tr>
                                <tr>
                                    <td>21</td>
                                    <td>2700</td>
                                    <td>02:14</td>
                                    <td>9162</td>
                                </tr>
                                <tr>
                                    <td>22</td>
                                    <td>3000</td>
                                    <td>02:30</td>
                                    <td>12162</td>
                                </tr>
                                <tr>
                                    <td>23</td>
                                    <td>3300</td>
                                    <td>02:45</td>
                                    <td>15462</td>
                                </tr>
                                <tr>
                                    <td>24</td>
                                    <td>3600</td>
                                    <td>03:00</td>
                                    <td>19062</td>
                                </tr>
                                <tr>
                                    <td>25</td>
                                    <td>4000</td>
                                    <td>03:20</td>
                                    <td>23062</td>
                                </tr>
                                <tr>
                                    <td>26</td>
                                    <td>6200</td>
                                    <td>05:10</td>
                                    <td>29262</td>
                                </tr>
                                <tr>
                                    <td>27</td>
                                    <td>7500</td>
                                    <td>06:15</td>
                                    <td>36762</td>
                                </tr>
                                <tr>
                                    <td>28</td>
                                    <td>8900</td>
                                    <td>07:25</td>
                                    <td>45662</td>
                                </tr>
                                <tr>
                                    <td>29</td>
                                    <td>11000</td>
                                    <td>09:10</td>
                                    <td>56662</td>
                                </tr>
                                <tr>
                                    <td>30</td>
                                    <td>14000</td>
                                    <td>11:40</td>
                                    <td>70662</td>
                                </tr>
                                </table>

                        </div>

                        <div class="item">
                            <span>Daily points reward (approximate estimate)</span>
                            <table>
                                <tr>
                                    <th>Rank</th>
                                    <th>Points</th>
                                    <th>Extra Rewards</th>
                                </tr>
                                <tr>
                                    <td>1-2</td>
                                    <td>+45</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>3-5</td>
                                    <td>+35</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>6-50</td>
                                    <td>+30</td>
                                    <td>5x High Five, 3x Power Boost, 1x Power Surge, 1x No Shit, 1x Clean Slate</td>
                                </tr>
                                <tr>
                                    <td>Top 5%</td>
                                    <td>+24</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Top 25%</td>
                                    <td>+20</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Top 50%</td>
                                    <td>+18</td>
                                    <td>2x High Five, 1x Power Boost</td>
                                </tr>
                                <tr>
                                    <td>Last 50%</td>
                                    <td>+15</td>
                                    <td></td>
                                </tr>
                                </table>
                        </div>

                        <div class="item">
                            <span>Quarterly point reward</span>
                            <table>
                                <tr>
                                    <th>Level</th>
                                    <th>Rank</th>
                                    <th>Quantity</th>
                                    <th>Percentage</th>
                                </tr>
                                <tr>
                                    <td>Legendary</td>
                                    <td>1-133</td>
                                    <td>133</td>
                                    <td>0.4433%</td>
                                </tr>
                                <tr>
                                    <td>Epic</td>
                                    <td>134-1067</td>
                                    <td>934</td>
                                    <td>3.1133%</td>
                                </tr>
                                <tr>
                                    <td>Rare</td>
                                    <td>1068-3600</td>
                                    <td>2533</td>
                                    <td>8.4433%</td>
                                </tr>
                                <tr>
                                    <td>Uncommon</td>
                                    <td>3601-8533</td>
                                    <td>4933</td>
                                    <td>16.4433%</td>
                                </tr>
                                <tr>
                                    <td>Common</td>
                                    <td>8534-30000</td>
                                    <td>21467</td>
                                    <td>71.5566%</td>
                                </tr>
                                </table>
                        </div>

                        <div class="item">
                            <span>Portal Level Comparison Table</span>
                            <table>
                            <tr>
                                <th>Level</th>
                                <th>Energy to Level Up</th>
                                <th>Upgrade Time</th>
                                <th>Portal Capacity</th>
                                <th>Total Energy Increase</th>
                                <th>Energy Supply</th>
                                <th>Upgrade Condition</th>
                            </tr>
                            <tr>
                                <td>0</td>
                                <td>2,500</td>
                                <td>02:04</td>
                                <td>0</td>
                                <td></td>
                                <td>0+</td>
                                <td>Build 10 tiles</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>10,000</td>
                                <td>08:20</td>
                                <td>+14,000</td>
                                <td>+15,000</td>
                                <td>2+</td>
                                <td>Average tile level 2</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>20,000</td>
                                <td>16:35</td>
                                <td>+20,000</td>
                                <td>+15,000</td>
                                <td>4+</td>
                                <td>Average tile level 4</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>50,000</td>
                                <td>41:37</td>
                                <td>+43,200</td>
                                <td>+20,000</td>
                                <td>6+</td>
                                <td>Average tile level 6</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>90,000</td>
                                <td>1:12:30</td>
                                <td>+72,000</td>
                                <td>+35,000</td>
                                <td>10+</td>
                                <td>Average tile level 8</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>200,000</td>
                                <td>02:46:35</td>
                                <td>+100,000</td>
                                <td>+115,000</td>
                                <td>14+</td>
                                <td>Average tile level 10</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>500,000</td>
                                <td>06:56:37</td>
                                <td>+144,000</td>
                                <td>+100,000</td>
                                <td>20+</td>
                                <td>Average tile level 12</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>800,000</td>
                                <td>11:06:38</td>
                                <td>+216,000</td>
                                <td>+200,000</td>
                                <td>30+</td>
                                <td>Average tile level 14</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>1,600,000</td>
                                <td></td>
                                <td>+331,200</td>
                                <td>+300,000</td>
                                <td>+46</td>
                                <td>Average tile level 16</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td></td>
                                <td></td>
                                <td>+489,600</td>
                                <td>+600,00</td>
                                <td>+68</td>
                                <td>Average tile level 16</td>
                            </tr>
                            </table>

                        </div>

                        <div class="item">
                            <span>Open the portal condition</span>
                            <table>
                                <tr>
                                    <th>Portal</th>
                                    <th>Unlock Condition</th>
                                    <th>Energy Cost</th>
                                    <th>Start Time</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Build 10 tiles</td>
                                    <td>2,500</td>
                                    <td>02:04</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Build 30 tiles</td>
                                    <td>20,000</td>
                                    <td>16:40</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Build 60 tiles</td>
                                    <td>300,000</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Build 90 tiles</td>
                                    <td>1,000,000</td>
                                    <td></td>
                                </tr>
                                </table>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  </template>
    
  <script>
//   import axios from 'axios';

  import Header from '../components/HeaderSection.vue';
  
  export default {
    name: 'StrategyComponent',
    components: {
      Header,
    },
    
    data() {
    return {
      currentTopic: 'protocol',
    };
  },
  };

  
  </script>
<style>
.main { padding: 40px 0 40px 0;position: relative; overflow: hidden;}
.main .container {position: relative; z-index: 2;}
.main h2 {font-weight: 700; font-size: 42px;line-height: 38px;}
.main p { margin: 10px 0 0 0;}
.initial-value { display: block; text-align: center; border: 2px solid #d7d7d74d; padding: 20px; width: 500px; margin:7px;}
.initial-value h4 { font-size: 25px; font-weight: 300; margin: 0; color: #aeb8ef;}
.initial-value span { display: block; position: relative; font-weight: 600; color: #7a7a7a;font-size: 12px;}
.apecointopics{display:block;padding:50px 0; background-color:#101010}
.apecointopics h3{font-weight:600;font-size:30px;color:#232f3e;margin:0 0 15px}
.apecointopics h4{color:#3F51B5;font-size:25px;font-weight:700; text-align:center;}
.apecointopics .item{display:block;position:relative;margin:20px 0 0}
.apecointopics .item span{font-weight:700;color:#f90;font-size:21px;height:40px;width:35px;text-align:center;line-height:40px;}
.apecointopics .item p{margin:0;font-weight:500;color:#fff}
.apecointopics .apeoptions {margin-right:15px;cursor:pointer; transition: background-color 0.4s ease-in-out;background-color:#3f51b54d;color: #e6ebf6;font-size:17px;text-align:center; display: block;padding: 10px; margin-bottom: 5px; border: 1px solid #42454a3b;}
.apecointopics .apeoptions:hover{background:#3f51b5c2;text-decoration:none;}
.apecointopics .active{background:#3f51b5c2;text-decoration:none}
.team-area{display:block;position:relative;padding:0; margin-top:20px;}
.team-area h3{display:block;text-align:center;font-weight:600;font-size:30px;margin:0 0 20px;color:#232f3e}
.team-area .team-member{display:block;position:relative;margin: 10px}
.team-area .team-member b{display:block;font-size:18px;font-weight:600;margin:10px 0 1px;color:#f90;transition:.2s ease all}
.team-area .team-member .cost {text-decoration:none; display:block;font-size:13px;font-weight:400;margin:1px 0 5px;color:#6b6c6c;transition:.2s ease all}
@media (max-width:768px) {
.team-area .team-member{border-right:none}
}
/* VALUES */
.valuesdao {display: block;position: relative;padding: 100px 0;color: #fff; background-size: cover;}
.valuesdao h3 {font-weight: 600; font-size: 24px; margin-bottom: 15px;}
.valuesdao h4 { font-weight: 400; font-size: 18px; line-height: 26px; margin: 0;}
.valuesdao .step { display: block; margin-top: 30px; text-align: center;}
.valuesdao .step b { font-size: 64px; font-weight: 700; color: #fff; opacity: 0.25;}
.content { display: none;}
#protocol { display: block;}
#apeCoinAllocation { height: 700px !important; width: 100%; }
.funds { width: 23% !important;}
.lockupbox {padding: 5px; text-align: center; border: 1px solid #d7d7d74d; width: 350px;}
.lockupbox b {display:block; font-size:18px;}
.lockupbox span {display:block; font-size:10px;}
.lockupbox .category {display:block; font-size:13px; color:#f90;}
.aiplog { display: flex; justify-content: space-between; height:20px;}
.aiplog .proposal { display: inline-block; width:70px; height:20px;}
.aiplog .titleaip { display: inline-block; width:400px; height:20px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;}
.aiplog .category { display: inline-block; width:100px; height:20px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;}
.aiplog .usd_value { display: inline-block; width:100px; height:20px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;}
.aiplog .apecoin_value { display: inline-block; width:100px; height:20px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;}
.aiplog .finishdate { display: inline-block; width:100px; height:20px;}
.intialvalueboxes {
display:flex;justify-content: space-between; margin-top:20px;
}
@media (max-width:768px) {
.intialvalueboxes {flex-wrap: wrap;}
}
.is-visible {
  display: block !important;
}
table, th, td {
  border: 1.5px solid white;
  border-collapse: collapse;
}
</style>
    