let dummyTopicCache = {
    topicTitle: 'Lorem ipsum dolor sit amet.',
    topicSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus augue, volutpat ut hendrerit ac.',
    topicPremise: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra dictum tortor, in euismod diam gravida in. Duis ut libero in urna suscipit molestie vel eget ex. In ante sapien, efficitur nec vulputate ut, auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra dictum tortor, in euismod diam gravida in. Duis ut libero in urna suscipit molestie vel eget ex. In ante sapien, efficitur nec vulputate ut, auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra dictum tortor, in euismod diam gravida in. Duis ut libero in urna suscipit molestie vel eget ex. In ante sapien, efficitur nec vulputate ut, auctor',
    topicReadMore: '',
    topicCommonGround: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus quis neque eu aliquam. Nulla',
    contributor1FirstName: 'Lorem ipsum',
    contributor1LastName: 'dolor sit amet',
    bio1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus augue, volutpat ut hendrerit ac.',
    photo1: '',
    proposal1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit lorem ut quam gravida, sed vestibulum libero porttitor. Integer ut efficitur felis. Vivamus lacinia interdum turpis in pretium. Curabitur molestie scelerisque nisi vel commodo. Nullam',
    contributor2FirstName: 'dolor sit amet',
    contributor2LastName: 'Lorem',
    bio2: 'consectetur adipiscing elit. Sed suscipit lorem ut quam gravida, sed vestibulum libero porttitor. Integer ut efficitur felis. Vivamus lacinia interdum turpis in pretium. Curabitur molestie scelerisque nisi vel commodo',
    photo2: '',
    proposal2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit lorem ut quam gravida, sed vestibulum libero porttitor. Integer ut efficitur felis. Vivamus lacinia interdum turpis in pretium. Curabitur molestie scelerisque nisi vel commodo. Nullam',
    keyClaims: {
        0: {
            claimDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
            claimContributor: 'contributor1',
            keyClaim: 'consectecipit lorem ut quam gravida, sed vestibulum libero porttitor',
            streamData: {
                0: {
                    streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
                    streamContributor: 'contributor1',
                    streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra dictum tortor, in euismod diam gravida in. Duis ut libero in urna suscipit molestie vel eget ex. In ante sapien, efficitur nec vulputate ut, auctor',
                    streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra dictum tortor, in euismod diam gravida in. Duis ut libero in urna suscipit molestie vel eget ex. In ante sapien, efficitur nec vulputate ut, auctor',
                },
                1: {
                    streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
                    streamContributor: 'contributor2',
                    streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
                    streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
                },
                2: {
                    streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
                    streamContributor: 'contributor1',
                    streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
                    streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
                },
                3: {
                    streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
                    streamContributor: 'contributor1',
                    streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat pulvinar, fringilla tellus vitae, tempor felis. Vivamus nec erat non libero luctus sagittis et id augue. Praesent vel leo sed felis efficitur laoreet. Cras sed massa ullamcorper eros rhoncus feugiat',
                    streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat pulvinar, fringilla tellus vitae, tempor felis. Vivamus nec erat non libero luctus sagittis et id augue. Praesent vel leo sed felis efficitur laoreet. Cras sed massa ullamcorper eros rhoncus feugiat',
                }
            }
        },
        // 1: {
        //     claimDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //     claimContributor: 'contributor1',
        //     keyClaim: 'consectetur adipisd vestibulud vestibulud vestibulud vestibulud vestibulud vestibulud vestibulucing elit. Sed suscipit lorem ut quam gravida, sed vestibulum libero porttitor',
        //     streamData: {
        //         0: {
        //             streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //             streamContributor: 'contributor1',
        //             streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra dictum tortor, in euismod diam gravida in. Duis ut libero in urna suscipit molestie vel eget ex. In ante sapien, efficitur nec vulputate ut, auctor',
        //             streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra dictum tortor, in euismod diam gravida in. Duis ut libero in urna suscipit molestie vel eget ex. In ante sapien, efficitur nec vulputate ut, auctor',
        //         },
        //         1: {
        //             streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //             streamContributor: 'contributor2',
        //             streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //             streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //         },
        //         2: {
        //             streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //             streamContributor: 'contributor1',
        //             streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //             streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //         },
        //     }
        // },
        // 2: {
        //     claimDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //     claimContributor: 'contributor1',
        //     keyClaim: 'consectecipit lorem ut quam gravida, sed vestibulum libero porttitor',
        //     streamData: {
        //         0: {
        //             streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //             streamContributor: 'contributor1',
        //             streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra dictum tortor, in euismod diam gravida in. Duis ut libero in urna suscipit molestie vel eget ex. In ante sapien, efficitur nec vulputate ut, auctor',
        //             streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra dictum tortor, in euismod diam gravida in. Duis ut libero in urna suscipit molestie vel eget ex. In ante sapien, efficitur nec vulputate ut, auctor',
        //         },
        //         1: {
        //             streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //             streamContributor: 'contributor2',
        //             streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //             streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //         },
        //         2: {
        //             streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //             streamContributor: 'contributor1',
        //             streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //             streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //         },
        //         3: {
        //             streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //             streamContributor: 'contributor1',
        //             streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat pulvinar, fringilla tellus vitae, tempor felis. Vivamus nec erat non libero luctus sagittis et id augue. Praesent vel leo sed felis efficitur laoreet. Cras sed massa ullamcorper eros rhoncus feugiat',
        //             streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat pulvinar, fringilla tellus vitae, tempor felis. Vivamus nec erat non libero luctus sagittis et id augue. Praesent vel leo sed felis efficitur laoreet. Cras sed massa ullamcorper eros rhoncus feugiat',
        //         },
        //         4: {
        //             streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //             streamContributor: 'contributor2',
        //             streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //             streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //         },
        //         5: {
        //             streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //             streamContributor: 'contributor1',
        //             streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat pulvinar, fringilla tellus vitae, tempor felis. Vivamus nec erat non libero luctus sagittis et id augue. Praesent vel leo sed felis efficitur laoreet. Cras sed massa ullamcorper eros rhoncus feugiat',
        //             streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat pulvinar, fringilla tellus vitae, tempor felis. Vivamus nec erat non libero luctus sagittis et id augue. Praesent vel leo sed felis efficitur laoreet. Cras sed massa ullamcorper eros rhoncus feugiat',
        //         },
        //         4: {
        //             streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //             streamContributor: 'contributor2',
        //             streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //             streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //         },
        //         5: {
        //             streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //             streamContributor: 'contributor1',
        //             streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat pulvinar, fringilla tellus vitae, tempor felis. Vivamus nec erat non libero luctus sagittis et id augue. Praesent vel leo sed felis efficitur laoreet. Cras sed massa ullamcorper eros rhoncus feugiat',
        //             streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat pulvinar, fringilla tellus vitae, tempor felis. Vivamus nec erat non libero luctus sagittis et id augue. Praesent vel leo sed felis efficitur laoreet. Cras sed massa ullamcorper eros rhoncus feugiat',
        //         },
        //     }
        // },
        // 3: {
        //     claimDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //     claimContributor: 'contributor1',
        //     keyClaim: 'consecteconsectecipit lorem ut quam gravida, sed vestibulum libero porttitorconsectecipit lorem ut quam gravida, sed vestibulum libero porttitorconsectecipit lorem ut quam gravida, sed vestibulum libero porttitorulum libero porttitor',
        //     streamData: {
        //         0: {
        //             streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //             streamContributor: 'contributor1',
        //             streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra dictum tortor, in euismod diam gravida in. Duis ut libero in urna suscipit molestie vel eget ex. In ante sapien, efficitur nec vulputate ut, auctor',
        //             streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra dictum tortor, in euismod diam gravida in. Duis ut libero in urna suscipit molestie vel eget ex. In ante sapien, efficitur nec vulputate ut, auctor',
        //         },
        //         1: {
        //             streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //             streamContributor: 'contributor2',
        //             streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //             streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //         },
        //         2: {
        //             streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //             streamContributor: 'contributor1',
        //             streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //             streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //         },
        //         3: {
        //             streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //             streamContributor: 'contributor1',
        //             streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat pulvinar, fringilla tellus vitae, tempor felis. Vivamus nec erat non libero luctus sagittis et id augue. Praesent vel leo sed felis efficitur laoreet. Cras sed massa ullamcorper eros rhoncus feugiat',
        //             streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat pulvinar, fringilla tellus vitae, tempor felis. Vivamus nec erat non libero luctus sagittis et id augue. Praesent vel leo sed felis efficitur laoreet. Cras sed massa ullamcorper eros rhoncus feugiat',
        //         }
        //     }
        // },
        // 4: {
        //     claimDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //     claimContributor: 'contributor1',
        //     keyClaim: 'consectetur adipiscing elit. Slum libero porttitor',
        //     streamData: {
        //         0: {
        //             streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //             streamContributor: 'contributor1',
        //             streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra dictum tortor, in euismod diam gravida in. Duis ut libero in urna suscipit molestie vel eget ex. In ante sapien, efficitur nec vulputate ut, auctor',
        //             streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra dictum tortor, in euismod diam gravida in. Duis ut libero in urna suscipit molestie vel eget ex. In ante sapien, efficitur nec vulputate ut, auctor',
        //         },
        //         1: {
        //             streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //             streamContributor: 'contributor2',
        //             streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //             streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //         },
        //         2: {
        //             streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //             streamContributor: 'contributor1',
        //             streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //             streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //         },
        //         3: {
        //             streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //             streamContributor: 'contributor1',
        //             streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat pulvinar, fringilla tellus vitae, tempor felis. Vivamus nec erat non libero luctus sagittis et id augue. Praesent vel leo sed felis efficitur laoreet. Cras sed massa ullamcorper eros rhoncus feugiat',
        //             streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat pulvinar, fringilla tellus vitae, tempor felis. Vivamus nec erat non libero luctus sagittis et id augue. Praesent vel leo sed felis efficitur laoreet. Cras sed massa ullamcorper eros rhoncus feugiat',
        //         }
        //     }
        // },
        // 5: {
        //     claimDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //     claimContributor: 'contributor2',
        //     keyClaim: 'consectibulum libero porttitor',
        //     streamData: {
        //         0: {
        //             streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //             streamContributor: 'contributor1',
        //             streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra dictum tortor, in euismod diam gravida in. Duis ut libero in urna suscipit molestie vel eget ex. In ante sapien, efficitur nec vulputate ut, auctor',
        //             streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra dictum tortor, in euismod diam gravida in. Duis ut libero in urna suscipit molestie vel eget ex. In ante sapien, efficitur nec vulputate ut, auctor',
        //         },
        //         1: {
        //             streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //             streamContributor: 'contributor2',
        //             streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //             streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //         },
        //         2: {
        //             streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //             streamContributor: 'contributor1',
        //             streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //             streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //         },
        //     }
        // },
        // 6: {
        //     claimDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //     claimContributor: 'contributor2',
        //     keyClaim: 'consectetur adipiscing elit. Sed suscipit lorem ut qconsectecipit lorem ut quam gravida, sed vestibulum libero porttitorconsectecipit lorem ut quam gravida, sed vestibulum libero porttitorconsectecipit lorem ut quam gravida, sed vestibulum libero porttitoruam gravida, sed vestibulum libero porttitor',
        //     streamData: {
        //         0: {
        //             streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //             streamContributor: 'contributor1',
        //             streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra dictum tortor, in euismod diam gravida in. Duis ut libero in urna suscipit molestie vel eget ex. In ante sapien, efficitur nec vulputate ut, auctor',
        //             streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra dictum tortor, in euismod diam gravida in. Duis ut libero in urna suscipit molestie vel eget ex. In ante sapien, efficitur nec vulputate ut, auctor',
        //         },
        //         1: {
        //             streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //             streamContributor: 'contributor2',
        //             streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //             streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //         },
        //         2: {
        //             streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //             streamContributor: 'contributor1',
        //             streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //             streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //         },
        //         3: {
        //             streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //             streamContributor: 'contributor1',
        //             streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat pulvinar, fringilla tellus vitae, tempor felis. Vivamus nec erat non libero luctus sagittis et id augue. Praesent vel leo sed felis efficitur laoreet. Cras sed massa ullamcorper eros rhoncus feugiat',
        //             streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat pulvinar, fringilla tellus vitae, tempor felis. Vivamus nec erat non libero luctus sagittis et id augue. Praesent vel leo sed felis efficitur laoreet. Cras sed massa ullamcorper eros rhoncus feugiat',
        //         },
        //         4: {
        //             streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //             streamContributor: 'contributor2',
        //             streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //             streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //         },
        //         5: {
        //             streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //             streamContributor: 'contributor1',
        //             streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat pulvinar, fringilla tellus vitae, tempor felis. Vivamus nec erat non libero luctus sagittis et id augue. Praesent vel leo sed felis efficitur laoreet. Cras sed massa ullamcorper eros rhoncus feugiat',
        //             streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat pulvinar, fringilla tellus vitae, tempor felis. Vivamus nec erat non libero luctus sagittis et id augue. Praesent vel leo sed felis efficitur laoreet. Cras sed massa ullamcorper eros rhoncus feugiat',
        //         },
        //         4: {
        //             streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //             streamContributor: 'contributor2',
        //             streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //             streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //         },
        //         5: {
        //             streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //             streamContributor: 'contributor1',
        //             streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat pulvinar, fringilla tellus vitae, tempor felis. Vivamus nec erat non libero luctus sagittis et id augue. Praesent vel leo sed felis efficitur laoreet. Cras sed massa ullamcorper eros rhoncus feugiat',
        //             streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat pulvinar, fringilla tellus vitae, tempor felis. Vivamus nec erat non libero luctus sagittis et id augue. Praesent vel leo sed felis efficitur laoreet. Cras sed massa ullamcorper eros rhoncus feugiat',
        //         },
        //     }
        // },
        // 7: {
        //     claimDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //     claimContributor: 'contributor2',
        //     keyClaim: 'adipisciconsectecipit lorem ut quam gravida, sed vestibulum libero porttitorng elit. Sed suscipit lorem ut quam gravida, sed vestibulum libero porttitor',
        //     streamData: {
        //         0: {
        //             streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //             streamContributor: 'contributor1',
        //             streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra dictum tortor, in euismod diam gravida in. Duis ut libero in urna suscipit molestie vel eget ex. In ante sapien, efficitur nec vulputate ut, auctor',
        //             streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra dictum tortor, in euismod diam gravida in. Duis ut libero in urna suscipit molestie vel eget ex. In ante sapien, efficitur nec vulputate ut, auctor',
        //         },
        //         1: {
        //             streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //             streamContributor: 'contributor2',
        //             streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //             streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //         },
        //         2: {
        //             streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //             streamContributor: 'contributor2',
        //             streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. IntegerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //             streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac nibh sed pretium. Integer',
        //         },
        //         3: {
        //             streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
        //             streamContributor: 'contributor1',
        //             streamComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat pulvinar, fringilla tellus vitae, tempor felis. Vivamus nec erat non libero luctus sagittis et id augue. Praesent vel leo sed felis efficitur laoreet. Cras sed massa ullamcorper eros rhoncus feugiat',
        //             streamEvidence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat pulvinar, fringilla tellus vitae, tempor felis. Vivamus nec erat non libero luctus sagittis et id augue. Praesent vel leo sed felis efficitur laoreet. Cras sed massa ullamcorper eros rhoncus feugiat',
        //         }
        //     }
        // },
    }
}

export default dummyTopicCache