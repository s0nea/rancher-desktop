export const containersList = new Promise((resolve) => {
  resolve([
      {
        "Image":            "penpotapp/frontend:latest",
        "Command":          "\"/bin/bash /entrypoint.sh nginx -g 'daemon off;'\"",
        "Status":           "Up About a minute",
        "Id":               "9f222c2ec5576c2e685e682d5e1b35a3e25c4b8758923e12767a5f8e62d6ae15",
        "ImageID":          "sha256:db246f6a86c21bf41072564c0c1fe3994e63465a89bef74184c2730fcae18bd0",
        "NetworkSettings":  {
          "Bridge":                 "",
          "SandboxID":              "9bfa04c8e79c991cc95d6e40b1a5e0e8e5132af493997ec742fc2b8fc52388d0",
          "HairpinMode":            false,
          "LinkLocalIPv6Address":   "",
          "LinkLocalIPv6PrefixLen": 0,
          "Ports":                  {
            "80/tcp": [
              {
                "HostIp":   "0.0.0.0",
                "HostPort": "9001"
              },
              {
                "HostIp":   "::",
                "HostPort": "9001"
              }
            ]
          },
          "SandboxKey":             "/var/run/docker/netns/9bfa04c8e79c",
          "SecondaryIPAddresses":   null,
          "SecondaryIPv6Addresses": null,
          "EndpointID":             "",
          "Gateway":                "",
          "GlobalIPv6Address":      "",
          "GlobalIPv6PrefixLen":    0,
          "IPAddress":              "",
          "IPPrefixLen":            0,
          "IPv6Gateway":            "",
          "MacAddress":             "",
          "Networks":               {
            "desktop_penpot": {
              "IPAMConfig":          null,
              "Links":               null,
              "Aliases":             [
                "desktop-penpot-frontend-1",
                "penpot-frontend",
                "9f222c2ec557"
              ],
              "NetworkID":           "4ec6ee555bc188485f65c069b3fdfd9897ea7dc368334805c3d81618b1718744",
              "EndpointID":          "d5eee71157d1f9f0194cb8990c31c080a3f75db553ea63d59c8f2d6fb270ff88",
              "Gateway":             "172.19.0.1",
              "IPAddress":           "172.19.0.5",
              "IPPrefixLen":         16,
              "IPv6Gateway":         "",
              "GlobalIPv6Address":   "",
              "GlobalIPv6PrefixLen": 0,
              "MacAddress":          "02:42:ac:13:00:05",
              "DriverOpts":          null
            }
          }
        },
        "Mounts":           [
          {
            "Type":        "volume",
            "Name":        "desktop_penpot_assets",
            "Source":      "/var/lib/docker/volumes/desktop_penpot_assets/_data",
            "Destination": "/opt/data/assets",
            "Driver":      "local",
            "Mode":        "z",
            "RW":          true,
            "Propagation": ""
          }
        ],
        "HostConfig":       {
          "Binds":                null,
          "ContainerIDFile":      "",
          "LogConfig":            {
            "Type":   "json-file",
            "Config": {}
          },
          "NetworkMode":          "desktop_penpot",
          "PortBindings":         {
            "80/tcp": [
              {
                "HostIp":   "",
                "HostPort": "9001"
              }
            ]
          },
          "RestartPolicy":        {
            "Name":              "always",
            "MaximumRetryCount": 0
          },
          "AutoRemove":           false,
          "VolumeDriver":         "",
          "VolumesFrom":          null,
          "ConsoleSize":          [
            0,
            0
          ],
          "CapAdd":               null,
          "CapDrop":              null,
          "CgroupnsMode":         "host",
          "Dns":                  [],
          "DnsOptions":           [],
          "DnsSearch":            [],
          "ExtraHosts":           [],
          "GroupAdd":             null,
          "IpcMode":              "private",
          "Cgroup":               "",
          "Links":                null,
          "OomScoreAdj":          0,
          "PidMode":              "",
          "Privileged":           false,
          "PublishAllPorts":      false,
          "ReadonlyRootfs":       false,
          "SecurityOpt":          null,
          "UTSMode":              "",
          "UsernsMode":           "",
          "ShmSize":              67108864,
          "Runtime":              "runc",
          "Isolation":            "",
          "CpuShares":            0,
          "Memory":               0,
          "NanoCpus":             0,
          "CgroupParent":         "",
          "BlkioWeight":          0,
          "BlkioWeightDevice":    null,
          "BlkioDeviceReadBps":   null,
          "BlkioDeviceWriteBps":  null,
          "BlkioDeviceReadIOps":  null,
          "BlkioDeviceWriteIOps": null,
          "CpuPeriod":            0,
          "CpuQuota":             0,
          "CpuRealtimePeriod":    0,
          "CpuRealtimeRuntime":   0,
          "CpusetCpus":           "",
          "CpusetMems":           "",
          "Devices":              null,
          "DeviceCgroupRules":    null,
          "DeviceRequests":       null,
          "MemoryReservation":    0,
          "MemorySwap":           0,
          "MemorySwappiness":     null,
          "OomKillDisable":       false,
          "PidsLimit":            null,
          "Ulimits":              null,
          "CpuCount":             0,
          "CpuPercent":           0,
          "IOMaximumIOps":        0,
          "IOMaximumBandwidth":   0,
          "Mounts":               [
            {
              "Type":          "volume",
              "Source":        "desktop_penpot_assets",
              "Target":        "/opt/data/assets",
              "VolumeOptions": {}
            }
          ],
          "MaskedPaths":          [
            "/proc/asound",
            "/proc/acpi",
            "/proc/kcore",
            "/proc/keys",
            "/proc/latency_stats",
            "/proc/timer_list",
            "/proc/timer_stats",
            "/proc/sched_debug",
            "/proc/scsi",
            "/sys/firmware"
          ],
          "ReadonlyPaths":        [
            "/proc/bus",
            "/proc/fs",
            "/proc/irq",
            "/proc/sys",
            "/proc/sysrq-trigger"
          ]
        },
        "SizeRootFs":       -1,
        "SizeRw":           -1,
        "Ports":            {
          "80/tcp": [
            {
              "HostIp":   "0.0.0.0",
              "HostPort": "9001"
            },
            {
              "HostIp":   "::",
              "HostPort": "9001"
            }
          ]
        },
        "Labels":           {
          "com.docker.compose.config-hash":          "c95ff2e5e338c998fd031d5ea3345fb2cc8ed3799543a8a516d67dd591b1591d",
          "com.docker.compose.container-number":     "1",
          "com.docker.compose.depends_on":           "penpot-backend:service_started:false,penpot-exporter:service_started:false",
          "com.docker.compose.image":                "sha256:db246f6a86c21bf41072564c0c1fe3994e63465a89bef74184c2730fcae18bd0",
          "com.docker.compose.oneoff":               "False",
          "com.docker.compose.project":              "desktop",
          "com.docker.compose.project.config_files": "/Users/SCURESCU/Desktop/docker-compose.yaml",
          "com.docker.compose.project.working_dir":  "/Users/SCURESCU/Desktop",
          "com.docker.compose.service":              "penpot-frontend",
          "com.docker.compose.version":              "2.17.3",
          "maintainer":                              "Andrey Antukh <niwi@niwi.nz>",
          "traefik.enable":                          "true"
        },
        "State":            "running",
        "Names":            [
          "desktop-penpot-frontend-1"
        ],
        "Created":          null,
        "state":            "running",
        "containerName":    "desktop-penpot-frontend-1",
        "started":          "Up About a minute",
        "imageName":        "penpotapp/frontend:latest",
        "availableActions": [
          {
            "label":      "Stop",
            "action":     "stopContainer",
            "enabled":    true,
            "icon":       "icon icon-pause",
            "bulkable":   true,
            "bulkAction": "stopContainers"
          },
          {
            "label":      "Start",
            "action":     "startContainer",
            "enabled":    false,
            "icon":       "icon icon-play",
            "bulkable":   true,
            "bulkAction": "startContainer"
          },
          {
            "label":      "Delete",
            "action":     "deleteContainer",
            "enabled":    false,
            "icon":       "icon icon-delete",
            "bulkable":   true,
            "bulkAction": "deleteContainers"
          }
        ]
      },
      {
        "Image":            "penpotapp/backend:latest",
        "Command":          "\"/bin/bash run.sh\"",
        "Status":           "Up About a minute",
        "Id":               "57e67d5b584a9ee8d226f2c587e37ca08b2726d0f9b9c9f83cce7e574c99fd34",
        "ImageID":          "sha256:16c20b6c8e266cf5a94f23ae124669fb3a083cc0b3354c6755b5086a03ce3109",
        "NetworkSettings":  {
          "Bridge":                 "",
          "SandboxID":              "0ecd4f4064738efa5897505fb0932c74698144dfbde7faa382e2914dce8d980d",
          "HairpinMode":            false,
          "LinkLocalIPv6Address":   "",
          "LinkLocalIPv6PrefixLen": 0,
          "Ports":                  {},
          "SandboxKey":             "/var/run/docker/netns/0ecd4f406473",
          "SecondaryIPAddresses":   null,
          "SecondaryIPv6Addresses": null,
          "EndpointID":             "",
          "Gateway":                "",
          "GlobalIPv6Address":      "",
          "GlobalIPv6PrefixLen":    0,
          "IPAddress":              "",
          "IPPrefixLen":            0,
          "IPv6Gateway":            "",
          "MacAddress":             "",
          "Networks":               {
            "desktop_penpot": {
              "IPAMConfig":          null,
              "Links":               null,
              "Aliases":             [
                "desktop-penpot-backend-1",
                "penpot-backend",
                "57e67d5b584a"
              ],
              "NetworkID":           "4ec6ee555bc188485f65c069b3fdfd9897ea7dc368334805c3d81618b1718744",
              "EndpointID":          "c4b85d8809f87aecdb1e72d4f456d792afa0b8623199e6d40c2d70eed5f6d72e",
              "Gateway":             "172.19.0.1",
              "IPAddress":           "172.19.0.7",
              "IPPrefixLen":         16,
              "IPv6Gateway":         "",
              "GlobalIPv6Address":   "",
              "GlobalIPv6PrefixLen": 0,
              "MacAddress":          "02:42:ac:13:00:07",
              "DriverOpts":          null
            }
          }
        },
        "Mounts":           [
          {
            "Type":        "volume",
            "Name":        "desktop_penpot_assets",
            "Source":      "/var/lib/docker/volumes/desktop_penpot_assets/_data",
            "Destination": "/opt/data/assets",
            "Driver":      "local",
            "Mode":        "z",
            "RW":          true,
            "Propagation": ""
          }
        ],
        "HostConfig":       {
          "Binds":                null,
          "ContainerIDFile":      "",
          "LogConfig":            {
            "Type":   "json-file",
            "Config": {}
          },
          "NetworkMode":          "desktop_penpot",
          "PortBindings":         {},
          "RestartPolicy":        {
            "Name":              "always",
            "MaximumRetryCount": 0
          },
          "AutoRemove":           false,
          "VolumeDriver":         "",
          "VolumesFrom":          null,
          "ConsoleSize":          [
            0,
            0
          ],
          "CapAdd":               null,
          "CapDrop":              null,
          "CgroupnsMode":         "host",
          "Dns":                  [],
          "DnsOptions":           [],
          "DnsSearch":            [],
          "ExtraHosts":           [],
          "GroupAdd":             null,
          "IpcMode":              "private",
          "Cgroup":               "",
          "Links":                null,
          "OomScoreAdj":          0,
          "PidMode":              "",
          "Privileged":           false,
          "PublishAllPorts":      false,
          "ReadonlyRootfs":       false,
          "SecurityOpt":          null,
          "UTSMode":              "",
          "UsernsMode":           "",
          "ShmSize":              67108864,
          "Runtime":              "runc",
          "Isolation":            "",
          "CpuShares":            0,
          "Memory":               0,
          "NanoCpus":             0,
          "CgroupParent":         "",
          "BlkioWeight":          0,
          "BlkioWeightDevice":    null,
          "BlkioDeviceReadBps":   null,
          "BlkioDeviceWriteBps":  null,
          "BlkioDeviceReadIOps":  null,
          "BlkioDeviceWriteIOps": null,
          "CpuPeriod":            0,
          "CpuQuota":             0,
          "CpuRealtimePeriod":    0,
          "CpuRealtimeRuntime":   0,
          "CpusetCpus":           "",
          "CpusetMems":           "",
          "Devices":              null,
          "DeviceCgroupRules":    null,
          "DeviceRequests":       null,
          "MemoryReservation":    0,
          "MemorySwap":           0,
          "MemorySwappiness":     null,
          "OomKillDisable":       false,
          "PidsLimit":            null,
          "Ulimits":              null,
          "CpuCount":             0,
          "CpuPercent":           0,
          "IOMaximumIOps":        0,
          "IOMaximumBandwidth":   0,
          "Mounts":               [
            {
              "Type":          "volume",
              "Source":        "desktop_penpot_assets",
              "Target":        "/opt/data/assets",
              "VolumeOptions": {}
            }
          ],
          "MaskedPaths":          [
            "/proc/asound",
            "/proc/acpi",
            "/proc/kcore",
            "/proc/keys",
            "/proc/latency_stats",
            "/proc/timer_list",
            "/proc/timer_stats",
            "/proc/sched_debug",
            "/proc/scsi",
            "/sys/firmware"
          ],
          "ReadonlyPaths":        [
            "/proc/bus",
            "/proc/fs",
            "/proc/irq",
            "/proc/sys",
            "/proc/sysrq-trigger"
          ]
        },
        "SizeRootFs":       -1,
        "SizeRw":           -1,
        "Ports":            {},
        "Labels":           {
          "com.docker.compose.config-hash":          "cc0e2657d86c7fd332fb1e3cb8c189cca538c61fdcb771df55fe6a99aa5836e1",
          "com.docker.compose.container-number":     "1",
          "com.docker.compose.depends_on":           "penpot-postgres:service_started:false,penpot-redis:service_started:false",
          "com.docker.compose.image":                "sha256:16c20b6c8e266cf5a94f23ae124669fb3a083cc0b3354c6755b5086a03ce3109",
          "com.docker.compose.oneoff":               "False",
          "com.docker.compose.project":              "desktop",
          "com.docker.compose.project.config_files": "/Users/SCURESCU/Desktop/docker-compose.yaml",
          "com.docker.compose.project.working_dir":  "/Users/SCURESCU/Desktop",
          "com.docker.compose.service":              "penpot-backend",
          "com.docker.compose.version":              "2.17.3",
          "maintainer":                              "Andrey Antukh <niwi@niwi.nz>",
          "org.opencontainers.image.ref.name":       "ubuntu",
          "org.opencontainers.image.version":        "22.04"
        },
        "State":            "running",
        "Names":            [
          "desktop-penpot-backend-1"
        ],
        "Created":          null,
        "state":            "running",
        "containerName":    "desktop-penpot-backend-1",
        "started":          "Up About a minute",
        "imageName":        "penpotapp/backend:latest",
        "availableActions": [
          {
            "label":      "Stop",
            "action":     "stopContainer",
            "enabled":    true,
            "icon":       "icon icon-pause",
            "bulkable":   true,
            "bulkAction": "stopContainers"
          },
          {
            "label":      "Start",
            "action":     "startContainer",
            "enabled":    false,
            "icon":       "icon icon-play",
            "bulkable":   true,
            "bulkAction": "startContainer"
          },
          {
            "label":      "Delete",
            "action":     "deleteContainer",
            "enabled":    false,
            "icon":       "icon icon-delete",
            "bulkable":   true,
            "bulkAction": "deleteContainers"
          }
        ]
      },
      {
        "Image":            "penpotapp/exporter:latest",
        "Command":          "\"node app.js\"",
        "Status":           "Up About a minute",
        "Id":               "abc386cf4c917625a295f5be3992ad9af9633a555c1e64f4565e74cada0baec1",
        "ImageID":          "sha256:f5457be85775e52536a37d59db07fd9a8d33876740388652cd053cb2050bb716",
        "NetworkSettings":  {
          "Bridge":                 "",
          "SandboxID":              "a17d35630cfd79ab5da252a66c224e4efe310cb843d4716094b0e52da2bd921c",
          "HairpinMode":            false,
          "LinkLocalIPv6Address":   "",
          "LinkLocalIPv6PrefixLen": 0,
          "Ports":                  {},
          "SandboxKey":             "/var/run/docker/netns/a17d35630cfd",
          "SecondaryIPAddresses":   null,
          "SecondaryIPv6Addresses": null,
          "EndpointID":             "",
          "Gateway":                "",
          "GlobalIPv6Address":      "",
          "GlobalIPv6PrefixLen":    0,
          "IPAddress":              "",
          "IPPrefixLen":            0,
          "IPv6Gateway":            "",
          "MacAddress":             "",
          "Networks":               {
            "desktop_penpot": {
              "IPAMConfig":          null,
              "Links":               null,
              "Aliases":             [
                "desktop-penpot-exporter-1",
                "penpot-exporter",
                "abc386cf4c91"
              ],
              "NetworkID":           "4ec6ee555bc188485f65c069b3fdfd9897ea7dc368334805c3d81618b1718744",
              "EndpointID":          "58de77c75f4f273fe21c4ed4b7b1d044d4daa09f7d0d00f276a5e985d47f9355",
              "Gateway":             "172.19.0.1",
              "IPAddress":           "172.19.0.3",
              "IPPrefixLen":         16,
              "IPv6Gateway":         "",
              "GlobalIPv6Address":   "",
              "GlobalIPv6PrefixLen": 0,
              "MacAddress":          "02:42:ac:13:00:03",
              "DriverOpts":          null
            }
          }
        },
        "Mounts":           [],
        "HostConfig":       {
          "Binds":                null,
          "ContainerIDFile":      "",
          "LogConfig":            {
            "Type":   "json-file",
            "Config": {}
          },
          "NetworkMode":          "desktop_penpot",
          "PortBindings":         {},
          "RestartPolicy":        {
            "Name":              "always",
            "MaximumRetryCount": 0
          },
          "AutoRemove":           false,
          "VolumeDriver":         "",
          "VolumesFrom":          null,
          "ConsoleSize":          [
            0,
            0
          ],
          "CapAdd":               null,
          "CapDrop":              null,
          "CgroupnsMode":         "host",
          "Dns":                  [],
          "DnsOptions":           [],
          "DnsSearch":            [],
          "ExtraHosts":           [],
          "GroupAdd":             null,
          "IpcMode":              "private",
          "Cgroup":               "",
          "Links":                null,
          "OomScoreAdj":          0,
          "PidMode":              "",
          "Privileged":           false,
          "PublishAllPorts":      false,
          "ReadonlyRootfs":       false,
          "SecurityOpt":          null,
          "UTSMode":              "",
          "UsernsMode":           "",
          "ShmSize":              67108864,
          "Runtime":              "runc",
          "Isolation":            "",
          "CpuShares":            0,
          "Memory":               0,
          "NanoCpus":             0,
          "CgroupParent":         "",
          "BlkioWeight":          0,
          "BlkioWeightDevice":    null,
          "BlkioDeviceReadBps":   null,
          "BlkioDeviceWriteBps":  null,
          "BlkioDeviceReadIOps":  null,
          "BlkioDeviceWriteIOps": null,
          "CpuPeriod":            0,
          "CpuQuota":             0,
          "CpuRealtimePeriod":    0,
          "CpuRealtimeRuntime":   0,
          "CpusetCpus":           "",
          "CpusetMems":           "",
          "Devices":              null,
          "DeviceCgroupRules":    null,
          "DeviceRequests":       null,
          "MemoryReservation":    0,
          "MemorySwap":           0,
          "MemorySwappiness":     null,
          "OomKillDisable":       false,
          "PidsLimit":            null,
          "Ulimits":              null,
          "CpuCount":             0,
          "CpuPercent":           0,
          "IOMaximumIOps":        0,
          "IOMaximumBandwidth":   0,
          "MaskedPaths":          [
            "/proc/asound",
            "/proc/acpi",
            "/proc/kcore",
            "/proc/keys",
            "/proc/latency_stats",
            "/proc/timer_list",
            "/proc/timer_stats",
            "/proc/sched_debug",
            "/proc/scsi",
            "/sys/firmware"
          ],
          "ReadonlyPaths":        [
            "/proc/bus",
            "/proc/fs",
            "/proc/irq",
            "/proc/sys",
            "/proc/sysrq-trigger"
          ]
        },
        "SizeRootFs":       -1,
        "SizeRw":           -1,
        "Ports":            {},
        "Labels":           {
          "com.docker.compose.config-hash":          "b26b2ad9b5c6d7da071e94504fed89c4cd130dc605094aec599067931019ab24",
          "com.docker.compose.container-number":     "1",
          "com.docker.compose.depends_on":           "",
          "com.docker.compose.image":                "sha256:f5457be85775e52536a37d59db07fd9a8d33876740388652cd053cb2050bb716",
          "com.docker.compose.oneoff":               "False",
          "com.docker.compose.project":              "desktop",
          "com.docker.compose.project.config_files": "/Users/SCURESCU/Desktop/docker-compose.yaml",
          "com.docker.compose.project.working_dir":  "/Users/SCURESCU/Desktop",
          "com.docker.compose.service":              "penpot-exporter",
          "com.docker.compose.version":              "2.17.3",
          "maintainer":                              "Andrey Antukh <niwi@niwi.nz>",
          "org.opencontainers.image.ref.name":       "ubuntu",
          "org.opencontainers.image.version":        "22.04"
        },
        "State":            "running",
        "Names":            [
          "desktop-penpot-exporter-1"
        ],
        "Created":          null,
        "state":            "running",
        "containerName":    "desktop-penpot-exporter-1",
        "started":          "Up About a minute",
        "imageName":        "penpotapp/exporter:latest",
        "availableActions": [
          {
            "label":      "Stop",
            "action":     "stopContainer",
            "enabled":    true,
            "icon":       "icon icon-pause",
            "bulkable":   true,
            "bulkAction": "stopContainers"
          },
          {
            "label":      "Start",
            "action":     "startContainer",
            "enabled":    false,
            "icon":       "icon icon-play",
            "bulkable":   true,
            "bulkAction": "startContainer"
          },
          {
            "label":      "Delete",
            "action":     "deleteContainer",
            "enabled":    false,
            "icon":       "icon icon-delete",
            "bulkable":   true,
            "bulkAction": "deleteContainers"
          }
        ]
      },
      {
        "Image":            "postgres:15",
        "Command":          "\"docker-entrypoint.sh postgres\"",
        "Status":           "Up About a minute",
        "Id":               "b253b86ddaca501c0f542564d086b7535ed015faa323f0f8df8fccc38c0c8ee0",
        "ImageID":          "sha256:7317fa7ddf4f0870b999784a8ff3f5d8f180fa43e0b894394cc3d8f3aa6cdbd9",
        "NetworkSettings":  {
          "Bridge":                 "",
          "SandboxID":              "f1af8dc2528d8c44dbc3e8131b7657e065accac1b8fcc27d31504e1b23a8df9d",
          "HairpinMode":            false,
          "LinkLocalIPv6Address":   "",
          "LinkLocalIPv6PrefixLen": 0,
          "Ports":                  {
            "5432/tcp": null
          },
          "SandboxKey":             "/var/run/docker/netns/f1af8dc2528d",
          "SecondaryIPAddresses":   null,
          "SecondaryIPv6Addresses": null,
          "EndpointID":             "",
          "Gateway":                "",
          "GlobalIPv6Address":      "",
          "GlobalIPv6PrefixLen":    0,
          "IPAddress":              "",
          "IPPrefixLen":            0,
          "IPv6Gateway":            "",
          "MacAddress":             "",
          "Networks":               {
            "desktop_penpot": {
              "IPAMConfig":          null,
              "Links":               null,
              "Aliases":             [
                "desktop-penpot-postgres-1",
                "penpot-postgres",
                "b253b86ddaca"
              ],
              "NetworkID":           "4ec6ee555bc188485f65c069b3fdfd9897ea7dc368334805c3d81618b1718744",
              "EndpointID":          "bb01b19e1325173661f3951b04ca00c1feece710ff2c7c4138a25188ca15618f",
              "Gateway":             "172.19.0.1",
              "IPAddress":           "172.19.0.6",
              "IPPrefixLen":         16,
              "IPv6Gateway":         "",
              "GlobalIPv6Address":   "",
              "GlobalIPv6PrefixLen": 0,
              "MacAddress":          "02:42:ac:13:00:06",
              "DriverOpts":          null
            }
          }
        },
        "Mounts":           [
          {
            "Type":        "volume",
            "Name":        "desktop_penpot_postgres_v15",
            "Source":      "/var/lib/docker/volumes/desktop_penpot_postgres_v15/_data",
            "Destination": "/var/lib/postgresql/data",
            "Driver":      "local",
            "Mode":        "z",
            "RW":          true,
            "Propagation": ""
          }
        ],
        "HostConfig":       {
          "Binds":                null,
          "ContainerIDFile":      "",
          "LogConfig":            {
            "Type":   "json-file",
            "Config": {}
          },
          "NetworkMode":          "desktop_penpot",
          "PortBindings":         {},
          "RestartPolicy":        {
            "Name":              "always",
            "MaximumRetryCount": 0
          },
          "AutoRemove":           false,
          "VolumeDriver":         "",
          "VolumesFrom":          null,
          "ConsoleSize":          [
            0,
            0
          ],
          "CapAdd":               null,
          "CapDrop":              null,
          "CgroupnsMode":         "host",
          "Dns":                  [],
          "DnsOptions":           [],
          "DnsSearch":            [],
          "ExtraHosts":           [],
          "GroupAdd":             null,
          "IpcMode":              "private",
          "Cgroup":               "",
          "Links":                null,
          "OomScoreAdj":          0,
          "PidMode":              "",
          "Privileged":           false,
          "PublishAllPorts":      false,
          "ReadonlyRootfs":       false,
          "SecurityOpt":          null,
          "UTSMode":              "",
          "UsernsMode":           "",
          "ShmSize":              67108864,
          "Runtime":              "runc",
          "Isolation":            "",
          "CpuShares":            0,
          "Memory":               0,
          "NanoCpus":             0,
          "CgroupParent":         "",
          "BlkioWeight":          0,
          "BlkioWeightDevice":    null,
          "BlkioDeviceReadBps":   null,
          "BlkioDeviceWriteBps":  null,
          "BlkioDeviceReadIOps":  null,
          "BlkioDeviceWriteIOps": null,
          "CpuPeriod":            0,
          "CpuQuota":             0,
          "CpuRealtimePeriod":    0,
          "CpuRealtimeRuntime":   0,
          "CpusetCpus":           "",
          "CpusetMems":           "",
          "Devices":              null,
          "DeviceCgroupRules":    null,
          "DeviceRequests":       null,
          "MemoryReservation":    0,
          "MemorySwap":           0,
          "MemorySwappiness":     null,
          "OomKillDisable":       false,
          "PidsLimit":            null,
          "Ulimits":              null,
          "CpuCount":             0,
          "CpuPercent":           0,
          "IOMaximumIOps":        0,
          "IOMaximumBandwidth":   0,
          "Mounts":               [
            {
              "Type":          "volume",
              "Source":        "desktop_penpot_postgres_v15",
              "Target":        "/var/lib/postgresql/data",
              "VolumeOptions": {}
            }
          ],
          "MaskedPaths":          [
            "/proc/asound",
            "/proc/acpi",
            "/proc/kcore",
            "/proc/keys",
            "/proc/latency_stats",
            "/proc/timer_list",
            "/proc/timer_stats",
            "/proc/sched_debug",
            "/proc/scsi",
            "/sys/firmware"
          ],
          "ReadonlyPaths":        [
            "/proc/bus",
            "/proc/fs",
            "/proc/irq",
            "/proc/sys",
            "/proc/sysrq-trigger"
          ]
        },
        "SizeRootFs":       -1,
        "SizeRw":           -1,
        "Ports":            {
          "5432/tcp": null
        },
        "Labels":           {
          "com.docker.compose.config-hash":          "6bc84b873e5a54c963a2a5beb0468a9c0739073acccf25087690737d7d620b65",
          "com.docker.compose.container-number":     "1",
          "com.docker.compose.depends_on":           "",
          "com.docker.compose.image":                "sha256:7317fa7ddf4f0870b999784a8ff3f5d8f180fa43e0b894394cc3d8f3aa6cdbd9",
          "com.docker.compose.oneoff":               "False",
          "com.docker.compose.project":              "desktop",
          "com.docker.compose.project.config_files": "/Users/SCURESCU/Desktop/docker-compose.yaml",
          "com.docker.compose.project.working_dir":  "/Users/SCURESCU/Desktop",
          "com.docker.compose.service":              "penpot-postgres",
          "com.docker.compose.version":              "2.17.3"
        },
        "State":            "running",
        "Names":            [
          "desktop-penpot-postgres-1"
        ],
        "Created":          null,
        "state":            "running",
        "containerName":    "desktop-penpot-postgres-1",
        "started":          "Up About a minute",
        "imageName":        "postgres:15",
        "availableActions": [
          {
            "label":      "Stop",
            "action":     "stopContainer",
            "enabled":    true,
            "icon":       "icon icon-pause",
            "bulkable":   true,
            "bulkAction": "stopContainers"
          },
          {
            "label":      "Start",
            "action":     "startContainer",
            "enabled":    false,
            "icon":       "icon icon-play",
            "bulkable":   true,
            "bulkAction": "startContainer"
          },
          {
            "label":      "Delete",
            "action":     "deleteContainer",
            "enabled":    false,
            "icon":       "icon icon-delete",
            "bulkable":   true,
            "bulkAction": "deleteContainers"
          }
        ]
      },
      {
        "Image":            "redis:7",
        "Command":          "\"docker-entrypoint.sh redis-server\"",
        "Status":           "Up About a minute",
        "Id":               "68c028de950c6fae763ec4dfd0d5f2574feca88c3480ba9db94c7cf3e43a0f23",
        "ImageID":          "sha256:c4645622ca3919b60b2d3a377c438b9d5de65cf76a63ca4c025733909db8c9ef",
        "NetworkSettings":  {
          "Bridge":                 "",
          "SandboxID":              "3aa19e31af94d915239d3516b60809e51c9f0b6f22c969626325ccae6fd59466",
          "HairpinMode":            false,
          "LinkLocalIPv6Address":   "",
          "LinkLocalIPv6PrefixLen": 0,
          "Ports":                  {
            "6379/tcp": null
          },
          "SandboxKey":             "/var/run/docker/netns/3aa19e31af94",
          "SecondaryIPAddresses":   null,
          "SecondaryIPv6Addresses": null,
          "EndpointID":             "",
          "Gateway":                "",
          "GlobalIPv6Address":      "",
          "GlobalIPv6PrefixLen":    0,
          "IPAddress":              "",
          "IPPrefixLen":            0,
          "IPv6Gateway":            "",
          "MacAddress":             "",
          "Networks":               {
            "desktop_penpot": {
              "IPAMConfig":          null,
              "Links":               null,
              "Aliases":             [
                "desktop-penpot-redis-1",
                "penpot-redis",
                "68c028de950c"
              ],
              "NetworkID":           "4ec6ee555bc188485f65c069b3fdfd9897ea7dc368334805c3d81618b1718744",
              "EndpointID":          "23bd9ee7facc538afb8303dd831b401dba1bf28923210378a943fc80f39bd298",
              "Gateway":             "172.19.0.1",
              "IPAddress":           "172.19.0.4",
              "IPPrefixLen":         16,
              "IPv6Gateway":         "",
              "GlobalIPv6Address":   "",
              "GlobalIPv6PrefixLen": 0,
              "MacAddress":          "02:42:ac:13:00:04",
              "DriverOpts":          null
            }
          }
        },
        "Mounts":           [
          {
            "Type":        "volume",
            "Name":        "2014788e23e024376e8e9897b9371608b24f0d5ef55642b22d941ff59edf7faa",
            "Source":      "/var/lib/docker/volumes/2014788e23e024376e8e9897b9371608b24f0d5ef55642b22d941ff59edf7faa/_data",
            "Destination": "/data",
            "Driver":      "local",
            "Mode":        "",
            "RW":          true,
            "Propagation": ""
          }
        ],
        "HostConfig":       {
          "Binds":                null,
          "ContainerIDFile":      "",
          "LogConfig":            {
            "Type":   "json-file",
            "Config": {}
          },
          "NetworkMode":          "desktop_penpot",
          "PortBindings":         {},
          "RestartPolicy":        {
            "Name":              "always",
            "MaximumRetryCount": 0
          },
          "AutoRemove":           false,
          "VolumeDriver":         "",
          "VolumesFrom":          null,
          "ConsoleSize":          [
            0,
            0
          ],
          "CapAdd":               null,
          "CapDrop":              null,
          "CgroupnsMode":         "host",
          "Dns":                  [],
          "DnsOptions":           [],
          "DnsSearch":            [],
          "ExtraHosts":           [],
          "GroupAdd":             null,
          "IpcMode":              "private",
          "Cgroup":               "",
          "Links":                null,
          "OomScoreAdj":          0,
          "PidMode":              "",
          "Privileged":           false,
          "PublishAllPorts":      false,
          "ReadonlyRootfs":       false,
          "SecurityOpt":          null,
          "UTSMode":              "",
          "UsernsMode":           "",
          "ShmSize":              67108864,
          "Runtime":              "runc",
          "Isolation":            "",
          "CpuShares":            0,
          "Memory":               0,
          "NanoCpus":             0,
          "CgroupParent":         "",
          "BlkioWeight":          0,
          "BlkioWeightDevice":    null,
          "BlkioDeviceReadBps":   null,
          "BlkioDeviceWriteBps":  null,
          "BlkioDeviceReadIOps":  null,
          "BlkioDeviceWriteIOps": null,
          "CpuPeriod":            0,
          "CpuQuota":             0,
          "CpuRealtimePeriod":    0,
          "CpuRealtimeRuntime":   0,
          "CpusetCpus":           "",
          "CpusetMems":           "",
          "Devices":              null,
          "DeviceCgroupRules":    null,
          "DeviceRequests":       null,
          "MemoryReservation":    0,
          "MemorySwap":           0,
          "MemorySwappiness":     null,
          "OomKillDisable":       false,
          "PidsLimit":            null,
          "Ulimits":              null,
          "CpuCount":             0,
          "CpuPercent":           0,
          "IOMaximumIOps":        0,
          "IOMaximumBandwidth":   0,
          "MaskedPaths":          [
            "/proc/asound",
            "/proc/acpi",
            "/proc/kcore",
            "/proc/keys",
            "/proc/latency_stats",
            "/proc/timer_list",
            "/proc/timer_stats",
            "/proc/sched_debug",
            "/proc/scsi",
            "/sys/firmware"
          ],
          "ReadonlyPaths":        [
            "/proc/bus",
            "/proc/fs",
            "/proc/irq",
            "/proc/sys",
            "/proc/sysrq-trigger"
          ]
        },
        "SizeRootFs":       -1,
        "SizeRw":           -1,
        "Ports":            {
          "6379/tcp": null
        },
        "Labels":           {
          "com.docker.compose.config-hash":          "360cdded21f67d032e99d8a69c9e662fa23a17dc7ee6701547a659a3b76e13f5",
          "com.docker.compose.container-number":     "1",
          "com.docker.compose.depends_on":           "",
          "com.docker.compose.image":                "sha256:c4645622ca3919b60b2d3a377c438b9d5de65cf76a63ca4c025733909db8c9ef",
          "com.docker.compose.oneoff":               "False",
          "com.docker.compose.project":              "desktop",
          "com.docker.compose.project.config_files": "/Users/SCURESCU/Desktop/docker-compose.yaml",
          "com.docker.compose.project.working_dir":  "/Users/SCURESCU/Desktop",
          "com.docker.compose.service":              "penpot-redis",
          "com.docker.compose.version":              "2.17.3"
        },
        "State":            "running",
        "Names":            [
          "desktop-penpot-redis-1"
        ],
        "Created":          null,
        "state":            "running",
        "containerName":    "desktop-penpot-redis-1",
        "started":          "Up About a minute",
        "imageName":        "redis:7",
        "availableActions": [
          {
            "label":      "Stop",
            "action":     "stopContainer",
            "enabled":    true,
            "icon":       "icon icon-pause",
            "bulkable":   true,
            "bulkAction": "stopContainers"
          },
          {
            "label":      "Start",
            "action":     "startContainer",
            "enabled":    false,
            "icon":       "icon icon-play",
            "bulkable":   true,
            "bulkAction": "startContainer"
          },
          {
            "label":      "Delete",
            "action":     "deleteContainer",
            "enabled":    false,
            "icon":       "icon icon-delete",
            "bulkable":   true,
            "bulkAction": "deleteContainers"
          }
        ]
      },
      {
        "Image":            "sj26/mailcatcher:latest",
        "Command":          "\"mailcatcher --foreground --ip 0.0.0.0\"",
        "Status":           "Up About a minute",
        "Id":               "0ce3c8e5eea2493472e57730ae52298e8d26231ca93bfb6e20120af2626b4e0a",
        "ImageID":          "sha256:d06b19d398e73bce5c61f91c2564085972c83e698dbfc0b968efea0ae0f86413",
        "NetworkSettings":  {
          "Bridge":                 "",
          "SandboxID":              "b301b9a9cd72a9f43669fe3c0ed5ec0f31c98fc2654db6a317dd6b78ba9c0248",
          "HairpinMode":            false,
          "LinkLocalIPv6Address":   "",
          "LinkLocalIPv6PrefixLen": 0,
          "Ports":                  {
            "1025/tcp": null,
            "1080/tcp": [
              {
                "HostIp":   "0.0.0.0",
                "HostPort": "1080"
              },
              {
                "HostIp":   "::",
                "HostPort": "1080"
              }
            ]
          },
          "SandboxKey":             "/var/run/docker/netns/b301b9a9cd72",
          "SecondaryIPAddresses":   null,
          "SecondaryIPv6Addresses": null,
          "EndpointID":             "",
          "Gateway":                "",
          "GlobalIPv6Address":      "",
          "GlobalIPv6PrefixLen":    0,
          "IPAddress":              "",
          "IPPrefixLen":            0,
          "IPv6Gateway":            "",
          "MacAddress":             "",
          "Networks":               {
            "desktop_penpot": {
              "IPAMConfig":          null,
              "Links":               null,
              "Aliases":             [
                "desktop-penpot-mailcatch-1",
                "penpot-mailcatch",
                "0ce3c8e5eea2"
              ],
              "NetworkID":           "4ec6ee555bc188485f65c069b3fdfd9897ea7dc368334805c3d81618b1718744",
              "EndpointID":          "49410e79fb398a0f18ad366b0fdc9e289c8f2cdb91ad2e74296d5feb112d16aa",
              "Gateway":             "172.19.0.1",
              "IPAddress":           "172.19.0.2",
              "IPPrefixLen":         16,
              "IPv6Gateway":         "",
              "GlobalIPv6Address":   "",
              "GlobalIPv6PrefixLen": 0,
              "MacAddress":          "02:42:ac:13:00:02",
              "DriverOpts":          null
            }
          }
        },
        "Mounts":           [],
        "HostConfig":       {
          "Binds":                null,
          "ContainerIDFile":      "",
          "LogConfig":            {
            "Type":   "json-file",
            "Config": {}
          },
          "NetworkMode":          "desktop_penpot",
          "PortBindings":         {
            "1080/tcp": [
              {
                "HostIp":   "",
                "HostPort": "1080"
              }
            ]
          },
          "RestartPolicy":        {
            "Name":              "always",
            "MaximumRetryCount": 0
          },
          "AutoRemove":           false,
          "VolumeDriver":         "",
          "VolumesFrom":          null,
          "ConsoleSize":          [
            0,
            0
          ],
          "CapAdd":               null,
          "CapDrop":              null,
          "CgroupnsMode":         "host",
          "Dns":                  [],
          "DnsOptions":           [],
          "DnsSearch":            [],
          "ExtraHosts":           [],
          "GroupAdd":             null,
          "IpcMode":              "private",
          "Cgroup":               "",
          "Links":                null,
          "OomScoreAdj":          0,
          "PidMode":              "",
          "Privileged":           false,
          "PublishAllPorts":      false,
          "ReadonlyRootfs":       false,
          "SecurityOpt":          null,
          "UTSMode":              "",
          "UsernsMode":           "",
          "ShmSize":              67108864,
          "Runtime":              "runc",
          "Isolation":            "",
          "CpuShares":            0,
          "Memory":               0,
          "NanoCpus":             0,
          "CgroupParent":         "",
          "BlkioWeight":          0,
          "BlkioWeightDevice":    null,
          "BlkioDeviceReadBps":   null,
          "BlkioDeviceWriteBps":  null,
          "BlkioDeviceReadIOps":  null,
          "BlkioDeviceWriteIOps": null,
          "CpuPeriod":            0,
          "CpuQuota":             0,
          "CpuRealtimePeriod":    0,
          "CpuRealtimeRuntime":   0,
          "CpusetCpus":           "",
          "CpusetMems":           "",
          "Devices":              null,
          "DeviceCgroupRules":    null,
          "DeviceRequests":       null,
          "MemoryReservation":    0,
          "MemorySwap":           0,
          "MemorySwappiness":     null,
          "OomKillDisable":       false,
          "PidsLimit":            null,
          "Ulimits":              null,
          "CpuCount":             0,
          "CpuPercent":           0,
          "IOMaximumIOps":        0,
          "IOMaximumBandwidth":   0,
          "MaskedPaths":          [
            "/proc/asound",
            "/proc/acpi",
            "/proc/kcore",
            "/proc/keys",
            "/proc/latency_stats",
            "/proc/timer_list",
            "/proc/timer_stats",
            "/proc/sched_debug",
            "/proc/scsi",
            "/sys/firmware"
          ],
          "ReadonlyPaths":        [
            "/proc/bus",
            "/proc/fs",
            "/proc/irq",
            "/proc/sys",
            "/proc/sysrq-trigger"
          ]
        },
        "SizeRootFs":       -1,
        "SizeRw":           -1,
        "Ports":            {
          "1025/tcp": null,
          "1080/tcp": [
            {
              "HostIp":   "0.0.0.0",
              "HostPort": "1080"
            },
            {
              "HostIp":   "::",
              "HostPort": "1080"
            }
          ]
        },
        "Labels":           {
          "com.docker.compose.config-hash":          "60eae7f8e5567664c487ca61224cb2b196f1a33d719968da8fee5badc5a5087b",
          "com.docker.compose.container-number":     "1",
          "com.docker.compose.depends_on":           "",
          "com.docker.compose.image":                "sha256:d06b19d398e73bce5c61f91c2564085972c83e698dbfc0b968efea0ae0f86413",
          "com.docker.compose.oneoff":               "False",
          "com.docker.compose.project":              "desktop",
          "com.docker.compose.project.config_files": "/Users/SCURESCU/Desktop/docker-compose.yaml",
          "com.docker.compose.project.working_dir":  "/Users/SCURESCU/Desktop",
          "com.docker.compose.service":              "penpot-mailcatch",
          "com.docker.compose.version":              "2.17.3"
        },
        "State":            "running",
        "Names":            [
          "desktop-penpot-mailcatch-1"
        ],
        "Created":          null,
        "state":            "running",
        "containerName":    "desktop-penpot-mailcatch-1",
        "started":          "Up About a minute",
        "imageName":        "sj26/mailcatcher:latest",
        "availableActions": [
          {
            "label":      "Stop",
            "action":     "stopContainer",
            "enabled":    true,
            "icon":       "icon icon-pause",
            "bulkable":   true,
            "bulkAction": "stopContainers"
          },
          {
            "label":      "Start",
            "action":     "startContainer",
            "enabled":    false,
            "icon":       "icon icon-play",
            "bulkable":   true,
            "bulkAction": "startContainer"
          },
          {
            "label":      "Delete",
            "action":     "deleteContainer",
            "enabled":    false,
            "icon":       "icon icon-delete",
            "bulkable":   true,
            "bulkAction": "deleteContainers"
          }
        ]
      },
      {
        "Image":            "busybox",
        "Command":          "\"--name bb\"",
        "Status":           "Created",
        "Id":               "be8a7ea2bb7e8d714171f54d91e8ae322ae418a0fc36fbbadbdcc055c51185c0",
        "ImageID":          "sha256:fc9db2894f4e4b8c296b8c9dab7e18a6e78de700d21bc0cfaf5c78484226db9c",
        "NetworkSettings":  {
          "Bridge":                 "",
          "SandboxID":              "0a25ddf7a0ea59b2448c81e992ec87e478409237f71e8626fee6a63abbcbf8bf",
          "HairpinMode":            false,
          "LinkLocalIPv6Address":   "",
          "LinkLocalIPv6PrefixLen": 0,
          "Ports":                  {},
          "SandboxKey":             "/var/run/docker/netns/0a25ddf7a0ea",
          "SecondaryIPAddresses":   null,
          "SecondaryIPv6Addresses": null,
          "EndpointID":             "8bc1f63409dbe034cd60f91507cbb6340ee714ad34cbed6a12ccb32dd78fb04c",
          "Gateway":                "172.17.0.1",
          "GlobalIPv6Address":      "",
          "GlobalIPv6PrefixLen":    0,
          "IPAddress":              "172.17.0.3",
          "IPPrefixLen":            16,
          "IPv6Gateway":            "",
          "MacAddress":             "02:42:ac:11:00:03",
          "Networks":               {
            "bridge": {
              "IPAMConfig":          null,
              "Links":               null,
              "Aliases":             null,
              "NetworkID":           "b8ac46923745cfba315fdb26b23f39fb2f99ca40e84e403c80927a20be5b3d09",
              "EndpointID":          "8bc1f63409dbe034cd60f91507cbb6340ee714ad34cbed6a12ccb32dd78fb04c",
              "Gateway":             "172.17.0.1",
              "IPAddress":           "172.17.0.3",
              "IPPrefixLen":         16,
              "IPv6Gateway":         "",
              "GlobalIPv6Address":   "",
              "GlobalIPv6PrefixLen": 0,
              "MacAddress":          "02:42:ac:11:00:03",
              "DriverOpts":          null
            }
          }
        },
        "Mounts":           [],
        "HostConfig":       {
          "Binds":                null,
          "ContainerIDFile":      "",
          "LogConfig":            {
            "Type":   "json-file",
            "Config": {}
          },
          "NetworkMode":          "default",
          "PortBindings":         {},
          "RestartPolicy":        {
            "Name":              "no",
            "MaximumRetryCount": 0
          },
          "AutoRemove":           false,
          "VolumeDriver":         "",
          "VolumesFrom":          null,
          "ConsoleSize":          [
            22,
            96
          ],
          "CapAdd":               null,
          "CapDrop":              null,
          "CgroupnsMode":         "host",
          "Dns":                  [],
          "DnsOptions":           [],
          "DnsSearch":            [],
          "ExtraHosts":           null,
          "GroupAdd":             null,
          "IpcMode":              "private",
          "Cgroup":               "",
          "Links":                null,
          "OomScoreAdj":          0,
          "PidMode":              "",
          "Privileged":           false,
          "PublishAllPorts":      false,
          "ReadonlyRootfs":       false,
          "SecurityOpt":          null,
          "UTSMode":              "",
          "UsernsMode":           "",
          "ShmSize":              67108864,
          "Runtime":              "runc",
          "Isolation":            "",
          "CpuShares":            0,
          "Memory":               0,
          "NanoCpus":             0,
          "CgroupParent":         "",
          "BlkioWeight":          0,
          "BlkioWeightDevice":    [],
          "BlkioDeviceReadBps":   [],
          "BlkioDeviceWriteBps":  [],
          "BlkioDeviceReadIOps":  [],
          "BlkioDeviceWriteIOps": [],
          "CpuPeriod":            0,
          "CpuQuota":             0,
          "CpuRealtimePeriod":    0,
          "CpuRealtimeRuntime":   0,
          "CpusetCpus":           "",
          "CpusetMems":           "",
          "Devices":              [],
          "DeviceCgroupRules":    null,
          "DeviceRequests":       null,
          "MemoryReservation":    0,
          "MemorySwap":           0,
          "MemorySwappiness":     null,
          "OomKillDisable":       false,
          "PidsLimit":            null,
          "Ulimits":              null,
          "CpuCount":             0,
          "CpuPercent":           0,
          "IOMaximumIOps":        0,
          "IOMaximumBandwidth":   0,
          "MaskedPaths":          [
            "/proc/asound",
            "/proc/acpi",
            "/proc/kcore",
            "/proc/keys",
            "/proc/latency_stats",
            "/proc/timer_list",
            "/proc/timer_stats",
            "/proc/sched_debug",
            "/proc/scsi",
            "/sys/firmware"
          ],
          "ReadonlyPaths":        [
            "/proc/bus",
            "/proc/fs",
            "/proc/irq",
            "/proc/sys",
            "/proc/sysrq-trigger"
          ]
        },
        "SizeRootFs":       -1,
        "SizeRw":           -1,
        "Ports":            {},
        "Labels":           {},
        "State":            "created",
        "Names":            [
          "sad_lovelace"
        ],
        "Created":          null,
        "state":            "created",
        "containerName":    "sad_lovelace",
        "started":          "",
        "imageName":        "busybox",
        "availableActions": [
          {
            "label":      "Stop",
            "action":     "stopContainer",
            "enabled":    false,
            "icon":       "icon icon-pause",
            "bulkable":   true,
            "bulkAction": "stopContainers"
          },
          {
            "label":      "Start",
            "action":     "startContainer",
            "enabled":    true,
            "icon":       "icon icon-play",
            "bulkable":   true,
            "bulkAction": "startContainer"
          },
          {
            "label":      "Delete",
            "action":     "deleteContainer",
            "enabled":    true,
            "icon":       "icon icon-delete",
            "bulkable":   true,
            "bulkAction": "deleteContainers"
          }
        ]
      },
      {
        "Image":            "redis",
        "Command":          "\"docker-entrypoint.sh --name r1\"",
        "Status":           "Exited (1) 6 days ago",
        "Id":               "de3f19652d8d05582c6995d6cb2f7b9e55a7cdc0dfc70a383f9a5769b81ae440",
        "ImageID":          "sha256:db32f19a80e6724015fc6a6f4c99731a7d4f88809a6e227313f19e1cde872734",
        "NetworkSettings":  {
          "Bridge":                 "",
          "SandboxID":              "7135a7348ec566d6c5dbf3e6dc9e447a404111577567eba5bafc63bbc756e427",
          "HairpinMode":            false,
          "LinkLocalIPv6Address":   "",
          "LinkLocalIPv6PrefixLen": 0,
          "Ports":                  {},
          "SandboxKey":             "/var/run/docker/netns/7135a7348ec5",
          "SecondaryIPAddresses":   null,
          "SecondaryIPv6Addresses": null,
          "EndpointID":             "",
          "Gateway":                "",
          "GlobalIPv6Address":      "",
          "GlobalIPv6PrefixLen":    0,
          "IPAddress":              "",
          "IPPrefixLen":            0,
          "IPv6Gateway":            "",
          "MacAddress":             "",
          "Networks":               {
            "bridge": {
              "IPAMConfig":          null,
              "Links":               null,
              "Aliases":             null,
              "NetworkID":           "b8ac46923745cfba315fdb26b23f39fb2f99ca40e84e403c80927a20be5b3d09",
              "EndpointID":          "",
              "Gateway":             "",
              "IPAddress":           "",
              "IPPrefixLen":         0,
              "IPv6Gateway":         "",
              "GlobalIPv6Address":   "",
              "GlobalIPv6PrefixLen": 0,
              "MacAddress":          "",
              "DriverOpts":          null
            }
          }
        },
        "Mounts":           [
          {
            "Type":        "volume",
            "Name":        "808bbbe0bd45dbfda7ef439e41010f8ff4f18b1e0d21c76fa06583c49a5bf1ca",
            "Source":      "/var/lib/docker/volumes/808bbbe0bd45dbfda7ef439e41010f8ff4f18b1e0d21c76fa06583c49a5bf1ca/_data",
            "Destination": "/data",
            "Driver":      "local",
            "Mode":        "",
            "RW":          true,
            "Propagation": ""
          }
        ],
        "HostConfig":       {
          "Binds":                null,
          "ContainerIDFile":      "",
          "LogConfig":            {
            "Type":   "json-file",
            "Config": {}
          },
          "NetworkMode":          "default",
          "PortBindings":         {},
          "RestartPolicy":        {
            "Name":              "no",
            "MaximumRetryCount": 0
          },
          "AutoRemove":           false,
          "VolumeDriver":         "",
          "VolumesFrom":          null,
          "ConsoleSize":          [
            22,
            116
          ],
          "CapAdd":               null,
          "CapDrop":              null,
          "CgroupnsMode":         "host",
          "Dns":                  [],
          "DnsOptions":           [],
          "DnsSearch":            [],
          "ExtraHosts":           null,
          "GroupAdd":             null,
          "IpcMode":              "private",
          "Cgroup":               "",
          "Links":                null,
          "OomScoreAdj":          0,
          "PidMode":              "",
          "Privileged":           false,
          "PublishAllPorts":      false,
          "ReadonlyRootfs":       false,
          "SecurityOpt":          null,
          "UTSMode":              "",
          "UsernsMode":           "",
          "ShmSize":              67108864,
          "Runtime":              "runc",
          "Isolation":            "",
          "CpuShares":            0,
          "Memory":               0,
          "NanoCpus":             0,
          "CgroupParent":         "",
          "BlkioWeight":          0,
          "BlkioWeightDevice":    [],
          "BlkioDeviceReadBps":   [],
          "BlkioDeviceWriteBps":  [],
          "BlkioDeviceReadIOps":  [],
          "BlkioDeviceWriteIOps": [],
          "CpuPeriod":            0,
          "CpuQuota":             0,
          "CpuRealtimePeriod":    0,
          "CpuRealtimeRuntime":   0,
          "CpusetCpus":           "",
          "CpusetMems":           "",
          "Devices":              [],
          "DeviceCgroupRules":    null,
          "DeviceRequests":       null,
          "MemoryReservation":    0,
          "MemorySwap":           0,
          "MemorySwappiness":     null,
          "OomKillDisable":       false,
          "PidsLimit":            null,
          "Ulimits":              null,
          "CpuCount":             0,
          "CpuPercent":           0,
          "IOMaximumIOps":        0,
          "IOMaximumBandwidth":   0,
          "MaskedPaths":          [
            "/proc/asound",
            "/proc/acpi",
            "/proc/kcore",
            "/proc/keys",
            "/proc/latency_stats",
            "/proc/timer_list",
            "/proc/timer_stats",
            "/proc/sched_debug",
            "/proc/scsi",
            "/sys/firmware"
          ],
          "ReadonlyPaths":        [
            "/proc/bus",
            "/proc/fs",
            "/proc/irq",
            "/proc/sys",
            "/proc/sysrq-trigger"
          ]
        },
        "SizeRootFs":       -1,
        "SizeRw":           -1,
        "Ports":            {},
        "Labels":           {},
        "State":            "exited",
        "Names":            [
          "affectionate_mcnulty"
        ],
        "Created":          null,
        "state":            "exited",
        "containerName":    "affectionate_mcnulty",
        "started":          "",
        "imageName":        "redis",
        "availableActions": [
          {
            "label":      "Stop",
            "action":     "stopContainer",
            "enabled":    false,
            "icon":       "icon icon-pause",
            "bulkable":   true,
            "bulkAction": "stopContainers"
          },
          {
            "label":      "Start",
            "action":     "startContainer",
            "enabled":    true,
            "icon":       "icon icon-play",
            "bulkable":   true,
            "bulkAction": "startContainer"
          },
          {
            "label":      "Delete",
            "action":     "deleteContainer",
            "enabled":    true,
            "icon":       "icon icon-delete",
            "bulkable":   true,
            "bulkAction": "deleteContainers"
          }
        ]
      },
      {
        "Image":            "busybox",
        "Command":          "\"sh\"",
        "Status":           "Exited (0) 6 days ago",
        "Id":               "f4f06a84de692f81d41a4e94f6493f3b1a3c0acee2b5fe3365fb3491c7c11da3",
        "ImageID":          "sha256:fc9db2894f4e4b8c296b8c9dab7e18a6e78de700d21bc0cfaf5c78484226db9c",
        "NetworkSettings":  {
          "Bridge":                 "",
          "SandboxID":              "a5b9b0b88dc278ec42033dcf74b9648ee25c056cd0db0e7d3393239f67488049",
          "HairpinMode":            false,
          "LinkLocalIPv6Address":   "",
          "LinkLocalIPv6PrefixLen": 0,
          "Ports":                  {},
          "SandboxKey":             "/var/run/docker/netns/a5b9b0b88dc2",
          "SecondaryIPAddresses":   null,
          "SecondaryIPv6Addresses": null,
          "EndpointID":             "",
          "Gateway":                "",
          "GlobalIPv6Address":      "",
          "GlobalIPv6PrefixLen":    0,
          "IPAddress":              "",
          "IPPrefixLen":            0,
          "IPv6Gateway":            "",
          "MacAddress":             "",
          "Networks":               {
            "bridge": {
              "IPAMConfig":          null,
              "Links":               null,
              "Aliases":             null,
              "NetworkID":           "b8ac46923745cfba315fdb26b23f39fb2f99ca40e84e403c80927a20be5b3d09",
              "EndpointID":          "",
              "Gateway":             "",
              "IPAddress":           "",
              "IPPrefixLen":         0,
              "IPv6Gateway":         "",
              "GlobalIPv6Address":   "",
              "GlobalIPv6PrefixLen": 0,
              "MacAddress":          "",
              "DriverOpts":          null
            }
          }
        },
        "Mounts":           [],
        "HostConfig":       {
          "Binds":                null,
          "ContainerIDFile":      "",
          "LogConfig":            {
            "Type":   "json-file",
            "Config": {}
          },
          "NetworkMode":          "default",
          "PortBindings":         {},
          "RestartPolicy":        {
            "Name":              "no",
            "MaximumRetryCount": 0
          },
          "AutoRemove":           false,
          "VolumeDriver":         "",
          "VolumesFrom":          null,
          "ConsoleSize":          [
            22,
            135
          ],
          "CapAdd":               null,
          "CapDrop":              null,
          "CgroupnsMode":         "host",
          "Dns":                  [],
          "DnsOptions":           [],
          "DnsSearch":            [],
          "ExtraHosts":           null,
          "GroupAdd":             null,
          "IpcMode":              "private",
          "Cgroup":               "",
          "Links":                null,
          "OomScoreAdj":          0,
          "PidMode":              "",
          "Privileged":           false,
          "PublishAllPorts":      false,
          "ReadonlyRootfs":       false,
          "SecurityOpt":          null,
          "UTSMode":              "",
          "UsernsMode":           "",
          "ShmSize":              67108864,
          "Runtime":              "runc",
          "Isolation":            "",
          "CpuShares":            0,
          "Memory":               0,
          "NanoCpus":             0,
          "CgroupParent":         "",
          "BlkioWeight":          0,
          "BlkioWeightDevice":    [],
          "BlkioDeviceReadBps":   [],
          "BlkioDeviceWriteBps":  [],
          "BlkioDeviceReadIOps":  [],
          "BlkioDeviceWriteIOps": [],
          "CpuPeriod":            0,
          "CpuQuota":             0,
          "CpuRealtimePeriod":    0,
          "CpuRealtimeRuntime":   0,
          "CpusetCpus":           "",
          "CpusetMems":           "",
          "Devices":              [],
          "DeviceCgroupRules":    null,
          "DeviceRequests":       null,
          "MemoryReservation":    0,
          "MemorySwap":           0,
          "MemorySwappiness":     null,
          "OomKillDisable":       false,
          "PidsLimit":            null,
          "Ulimits":              null,
          "CpuCount":             0,
          "CpuPercent":           0,
          "IOMaximumIOps":        0,
          "IOMaximumBandwidth":   0,
          "MaskedPaths":          [
            "/proc/asound",
            "/proc/acpi",
            "/proc/kcore",
            "/proc/keys",
            "/proc/latency_stats",
            "/proc/timer_list",
            "/proc/timer_stats",
            "/proc/sched_debug",
            "/proc/scsi",
            "/sys/firmware"
          ],
          "ReadonlyPaths":        [
            "/proc/bus",
            "/proc/fs",
            "/proc/irq",
            "/proc/sys",
            "/proc/sysrq-trigger"
          ]
        },
        "SizeRootFs":       -1,
        "SizeRw":           -1,
        "Ports":            {},
        "Labels":           {},
        "State":            "exited",
        "Names":            [
          "hungry_spence"
        ],
        "Created":          null,
        "state":            "exited",
        "containerName":    "hungry_spence",
        "started":          "",
        "imageName":        "busybox",
        "availableActions": [
          {
            "label":      "Stop",
            "action":     "stopContainer",
            "enabled":    false,
            "icon":       "icon icon-pause",
            "bulkable":   true,
            "bulkAction": "stopContainers"
          },
          {
            "label":      "Start",
            "action":     "startContainer",
            "enabled":    true,
            "icon":       "icon icon-play",
            "bulkable":   true,
            "bulkAction": "startContainer"
          },
          {
            "label":      "Delete",
            "action":     "deleteContainer",
            "enabled":    true,
            "icon":       "icon icon-delete",
            "bulkable":   true,
            "bulkAction": "deleteContainers"
          }
        ]
      },
      {
        "Image":            "docker:latest",
        "Command":          "\"dockerd-entrypoint.sh sh -c 'while true; do echo Hello from Docker; sleep 10; done'\"",
        "Status":           "Exited (255) 8 days ago",
        "Id":               "ee22982458fa1a67f76204d19039032d03b20d8950ed369ecbb53487cfceea3d",
        "ImageID":          "sha256:ab82f02ad750f2ff29a586d90b3a476d4ca893e87948292040e4535667dfc532",
        "NetworkSettings":  {
          "Bridge":                 "",
          "SandboxID":              "c80a37dbc089c3b824ac841a6cfc5501fe920ad959ce5abc49cada0c8ccf14df",
          "HairpinMode":            false,
          "LinkLocalIPv6Address":   "",
          "LinkLocalIPv6PrefixLen": 0,
          "Ports":                  {
            "2375/tcp": null,
            "2376/tcp": null
          },
          "SandboxKey":             "/var/run/docker/netns/c80a37dbc089",
          "SecondaryIPAddresses":   null,
          "SecondaryIPv6Addresses": null,
          "EndpointID":             "",
          "Gateway":                "",
          "GlobalIPv6Address":      "",
          "GlobalIPv6PrefixLen":    0,
          "IPAddress":              "",
          "IPPrefixLen":            0,
          "IPv6Gateway":            "",
          "MacAddress":             "",
          "Networks":               {
            "foo_default": {
              "IPAMConfig":          null,
              "Links":               null,
              "Aliases":             [
                "foo-docker-1",
                "docker",
                "ee22982458fa"
              ],
              "NetworkID":           "eb26a4550ba8f8779e9d9671bc36b6f34f535a28bd9e56aa1dfff580552da001",
              "EndpointID":          "adfb3e928c9ca9d15d762fad533bfcb2a1fb0ffc8133655f1bf55f8aeee50c93",
              "Gateway":             "172.20.0.1",
              "IPAddress":           "172.20.0.3",
              "IPPrefixLen":         16,
              "IPv6Gateway":         "",
              "GlobalIPv6Address":   "",
              "GlobalIPv6PrefixLen": 0,
              "MacAddress":          "02:42:ac:14:00:03",
              "DriverOpts":          null
            }
          }
        },
        "Mounts":           [
          {
            "Type":        "volume",
            "Name":        "8a82147783553221653b605565cdbccedf4252e69f526a25552577fdf7ba7d27",
            "Source":      "/var/lib/docker/volumes/8a82147783553221653b605565cdbccedf4252e69f526a25552577fdf7ba7d27/_data",
            "Destination": "/var/lib/docker",
            "Driver":      "local",
            "Mode":        "",
            "RW":          true,
            "Propagation": ""
          }
        ],
        "HostConfig":       {
          "Binds":                null,
          "ContainerIDFile":      "",
          "LogConfig":            {
            "Type":   "json-file",
            "Config": {}
          },
          "NetworkMode":          "foo_default",
          "PortBindings":         {},
          "RestartPolicy":        {
            "Name":              "",
            "MaximumRetryCount": 0
          },
          "AutoRemove":           false,
          "VolumeDriver":         "",
          "VolumesFrom":          null,
          "ConsoleSize":          [
            0,
            0
          ],
          "CapAdd":               null,
          "CapDrop":              null,
          "CgroupnsMode":         "host",
          "Dns":                  [],
          "DnsOptions":           [],
          "DnsSearch":            [],
          "ExtraHosts":           [],
          "GroupAdd":             null,
          "IpcMode":              "private",
          "Cgroup":               "",
          "Links":                null,
          "OomScoreAdj":          0,
          "PidMode":              "",
          "Privileged":           false,
          "PublishAllPorts":      false,
          "ReadonlyRootfs":       false,
          "SecurityOpt":          null,
          "UTSMode":              "",
          "UsernsMode":           "",
          "ShmSize":              67108864,
          "Runtime":              "runc",
          "Isolation":            "",
          "CpuShares":            0,
          "Memory":               0,
          "NanoCpus":             0,
          "CgroupParent":         "",
          "BlkioWeight":          0,
          "BlkioWeightDevice":    null,
          "BlkioDeviceReadBps":   null,
          "BlkioDeviceWriteBps":  null,
          "BlkioDeviceReadIOps":  null,
          "BlkioDeviceWriteIOps": null,
          "CpuPeriod":            0,
          "CpuQuota":             0,
          "CpuRealtimePeriod":    0,
          "CpuRealtimeRuntime":   0,
          "CpusetCpus":           "",
          "CpusetMems":           "",
          "Devices":              null,
          "DeviceCgroupRules":    null,
          "DeviceRequests":       null,
          "MemoryReservation":    0,
          "MemorySwap":           0,
          "MemorySwappiness":     null,
          "OomKillDisable":       false,
          "PidsLimit":            null,
          "Ulimits":              null,
          "CpuCount":             0,
          "CpuPercent":           0,
          "IOMaximumIOps":        0,
          "IOMaximumBandwidth":   0,
          "MaskedPaths":          [
            "/proc/asound",
            "/proc/acpi",
            "/proc/kcore",
            "/proc/keys",
            "/proc/latency_stats",
            "/proc/timer_list",
            "/proc/timer_stats",
            "/proc/sched_debug",
            "/proc/scsi",
            "/sys/firmware"
          ],
          "ReadonlyPaths":        [
            "/proc/bus",
            "/proc/fs",
            "/proc/irq",
            "/proc/sys",
            "/proc/sysrq-trigger"
          ]
        },
        "SizeRootFs":       -1,
        "SizeRw":           -1,
        "Ports":            {
          "2375/tcp": null,
          "2376/tcp": null
        },
        "Labels":           {
          "com.docker.compose.config-hash":          "021c5840d5b82e900dedb13c5fbf809a87303a6c9f411c141133ed90dc9c92a6",
          "com.docker.compose.container-number":     "1",
          "com.docker.compose.depends_on":           "",
          "com.docker.compose.image":                "sha256:ab82f02ad750f2ff29a586d90b3a476d4ca893e87948292040e4535667dfc532",
          "com.docker.compose.oneoff":               "False",
          "com.docker.compose.project":              "foo",
          "com.docker.compose.project.config_files": "/Users/SCURESCU/Desktop/foo/docker-compose.yaml",
          "com.docker.compose.project.working_dir":  "/Users/SCURESCU/Desktop/foo",
          "com.docker.compose.service":              "docker",
          "com.docker.compose.version":              "2.17.3"
        },
        "State":            "exited",
        "Names":            [
          "foo-docker-1"
        ],
        "Created":          null,
        "state":            "exited",
        "containerName":    "foo-docker-1",
        "started":          "",
        "imageName":        "docker:latest",
        "availableActions": [
          {
            "label":      "Stop",
            "action":     "stopContainer",
            "enabled":    false,
            "icon":       "icon icon-pause",
            "bulkable":   true,
            "bulkAction": "stopContainers"
          },
          {
            "label":      "Start",
            "action":     "startContainer",
            "enabled":    true,
            "icon":       "icon icon-play",
            "bulkable":   true,
            "bulkAction": "startContainer"
          },
          {
            "label":      "Delete",
            "action":     "deleteContainer",
            "enabled":    true,
            "icon":       "icon icon-delete",
            "bulkable":   true,
            "bulkAction": "deleteContainers"
          }
        ]
      },
      {
        "Image":            "busybox:latest",
        "Command":          "\"sh -c 'while true; do echo Hello from BusyBox; sleep 10; done'\"",
        "Status":           "Exited (255) 8 days ago",
        "Id":               "ae8c2619e2f5573a847f93f6626e4f568ecc2a2e2fa4bf35bb478e44da456167",
        "ImageID":          "sha256:fc9db2894f4e4b8c296b8c9dab7e18a6e78de700d21bc0cfaf5c78484226db9c",
        "NetworkSettings":  {
          "Bridge":                 "",
          "SandboxID":              "254ac01e647505d6e11765859eba53f96f9c89f0ffd6e7b5231916094bfb9c17",
          "HairpinMode":            false,
          "LinkLocalIPv6Address":   "",
          "LinkLocalIPv6PrefixLen": 0,
          "Ports":                  {},
          "SandboxKey":             "/var/run/docker/netns/254ac01e6475",
          "SecondaryIPAddresses":   null,
          "SecondaryIPv6Addresses": null,
          "EndpointID":             "",
          "Gateway":                "",
          "GlobalIPv6Address":      "",
          "GlobalIPv6PrefixLen":    0,
          "IPAddress":              "",
          "IPPrefixLen":            0,
          "IPv6Gateway":            "",
          "MacAddress":             "",
          "Networks":               {
            "foo_default": {
              "IPAMConfig":          null,
              "Links":               null,
              "Aliases":             [
                "foo-busybox-1",
                "busybox",
                "ae8c2619e2f5"
              ],
              "NetworkID":           "eb26a4550ba8f8779e9d9671bc36b6f34f535a28bd9e56aa1dfff580552da001",
              "EndpointID":          "fa22db3adbc16e185a05a718707e9477e69323d8cf0e1cfb31752cbaee0ca224",
              "Gateway":             "172.20.0.1",
              "IPAddress":           "172.20.0.2",
              "IPPrefixLen":         16,
              "IPv6Gateway":         "",
              "GlobalIPv6Address":   "",
              "GlobalIPv6PrefixLen": 0,
              "MacAddress":          "02:42:ac:14:00:02",
              "DriverOpts":          null
            }
          }
        },
        "Mounts":           [],
        "HostConfig":       {
          "Binds":                null,
          "ContainerIDFile":      "",
          "LogConfig":            {
            "Type":   "json-file",
            "Config": {}
          },
          "NetworkMode":          "foo_default",
          "PortBindings":         {},
          "RestartPolicy":        {
            "Name":              "",
            "MaximumRetryCount": 0
          },
          "AutoRemove":           false,
          "VolumeDriver":         "",
          "VolumesFrom":          null,
          "ConsoleSize":          [
            0,
            0
          ],
          "CapAdd":               null,
          "CapDrop":              null,
          "CgroupnsMode":         "host",
          "Dns":                  [],
          "DnsOptions":           [],
          "DnsSearch":            [],
          "ExtraHosts":           [],
          "GroupAdd":             null,
          "IpcMode":              "private",
          "Cgroup":               "",
          "Links":                null,
          "OomScoreAdj":          0,
          "PidMode":              "",
          "Privileged":           false,
          "PublishAllPorts":      false,
          "ReadonlyRootfs":       false,
          "SecurityOpt":          null,
          "UTSMode":              "",
          "UsernsMode":           "",
          "ShmSize":              67108864,
          "Runtime":              "runc",
          "Isolation":            "",
          "CpuShares":            0,
          "Memory":               0,
          "NanoCpus":             0,
          "CgroupParent":         "",
          "BlkioWeight":          0,
          "BlkioWeightDevice":    null,
          "BlkioDeviceReadBps":   null,
          "BlkioDeviceWriteBps":  null,
          "BlkioDeviceReadIOps":  null,
          "BlkioDeviceWriteIOps": null,
          "CpuPeriod":            0,
          "CpuQuota":             0,
          "CpuRealtimePeriod":    0,
          "CpuRealtimeRuntime":   0,
          "CpusetCpus":           "",
          "CpusetMems":           "",
          "Devices":              null,
          "DeviceCgroupRules":    null,
          "DeviceRequests":       null,
          "MemoryReservation":    0,
          "MemorySwap":           0,
          "MemorySwappiness":     null,
          "OomKillDisable":       false,
          "PidsLimit":            null,
          "Ulimits":              null,
          "CpuCount":             0,
          "CpuPercent":           0,
          "IOMaximumIOps":        0,
          "IOMaximumBandwidth":   0,
          "MaskedPaths":          [
            "/proc/asound",
            "/proc/acpi",
            "/proc/kcore",
            "/proc/keys",
            "/proc/latency_stats",
            "/proc/timer_list",
            "/proc/timer_stats",
            "/proc/sched_debug",
            "/proc/scsi",
            "/sys/firmware"
          ],
          "ReadonlyPaths":        [
            "/proc/bus",
            "/proc/fs",
            "/proc/irq",
            "/proc/sys",
            "/proc/sysrq-trigger"
          ]
        },
        "SizeRootFs":       -1,
        "SizeRw":           -1,
        "Ports":            {},
        "Labels":           {
          "com.docker.compose.config-hash":          "38cbf607a6f19fe9b6e89afe4e8f08d0302d7834536aefcf21456f4ee4a7c996",
          "com.docker.compose.container-number":     "1",
          "com.docker.compose.depends_on":           "",
          "com.docker.compose.image":                "sha256:fc9db2894f4e4b8c296b8c9dab7e18a6e78de700d21bc0cfaf5c78484226db9c",
          "com.docker.compose.oneoff":               "False",
          "com.docker.compose.project":              "foo",
          "com.docker.compose.project.config_files": "/Users/SCURESCU/Desktop/foo/docker-compose.yaml",
          "com.docker.compose.project.working_dir":  "/Users/SCURESCU/Desktop/foo",
          "com.docker.compose.service":              "busybox",
          "com.docker.compose.version":              "2.17.3"
        },
        "State":            "exited",
        "Names":            [
          "foo-busybox-1"
        ],
        "Created":          null,
        "state":            "exited",
        "containerName":    "foo-busybox-1",
        "started":          "",
        "imageName":        "busybox:latest",
        "availableActions": [
          {
            "label":      "Stop",
            "action":     "stopContainer",
            "enabled":    false,
            "icon":       "icon icon-pause",
            "bulkable":   true,
            "bulkAction": "stopContainers"
          },
          {
            "label":      "Start",
            "action":     "startContainer",
            "enabled":    true,
            "icon":       "icon icon-play",
            "bulkable":   true,
            "bulkAction": "startContainer"
          },
          {
            "label":      "Delete",
            "action":     "deleteContainer",
            "enabled":    true,
            "icon":       "icon icon-delete",
            "bulkable":   true,
            "bulkAction": "deleteContainers"
          }
        ]
      },
      {
        "Image":            "nginx",
        "Command":          "\"/docker-entrypoint.sh nginx -g 'daemon off;'\"",
        "Status":           "Exited (255) 8 days ago",
        "Id":               "cfaa6435ba2f6980398daad4f514e58b82472c036ce646d4d80ac3dedc6da880",
        "ImageID":          "sha256:ff78c7a65ec2b1fb09f58b27b0dd022ac1f4e16b9bcfe1cbdc18c36f2e0e1842",
        "NetworkSettings":  {
          "Bridge":                 "",
          "SandboxID":              "ed27f446b78f579cab62ec737416ec4b6ddcbec454514cec3350d0ac8f796d8f",
          "HairpinMode":            false,
          "LinkLocalIPv6Address":   "",
          "LinkLocalIPv6PrefixLen": 0,
          "Ports":                  {
            "80/tcp": [
              {
                "HostIp":   "0.0.0.0",
                "HostPort": "80"
              },
              {
                "HostIp":   "::",
                "HostPort": "80"
              }
            ]
          },
          "SandboxKey":             "/var/run/docker/netns/ed27f446b78f",
          "SecondaryIPAddresses":   null,
          "SecondaryIPv6Addresses": null,
          "EndpointID":             "c49077dd09d2682c5e0c189b5b16dbd001a33a1b119360a95537a6f45b191542",
          "Gateway":                "172.17.0.1",
          "GlobalIPv6Address":      "",
          "GlobalIPv6PrefixLen":    0,
          "IPAddress":              "172.17.0.3",
          "IPPrefixLen":            16,
          "IPv6Gateway":            "",
          "MacAddress":             "02:42:ac:11:00:03",
          "Networks":               {
            "bridge": {
              "IPAMConfig":          null,
              "Links":               null,
              "Aliases":             null,
              "NetworkID":           "3002837b4110d60006808bd53e6ea5e52aedd6001b046fb2144c1adf5afe2bd7",
              "EndpointID":          "c49077dd09d2682c5e0c189b5b16dbd001a33a1b119360a95537a6f45b191542",
              "Gateway":             "172.17.0.1",
              "IPAddress":           "172.17.0.3",
              "IPPrefixLen":         16,
              "IPv6Gateway":         "",
              "GlobalIPv6Address":   "",
              "GlobalIPv6PrefixLen": 0,
              "MacAddress":          "02:42:ac:11:00:03",
              "DriverOpts":          null
            }
          }
        },
        "Mounts":           [],
        "HostConfig":       {
          "Binds":                null,
          "ContainerIDFile":      "",
          "LogConfig":            {
            "Type":   "json-file",
            "Config": {}
          },
          "NetworkMode":          "default",
          "PortBindings":         {
            "80/tcp": [
              {
                "HostIp":   "",
                "HostPort": "80"
              }
            ]
          },
          "RestartPolicy":        {
            "Name":              "no",
            "MaximumRetryCount": 0
          },
          "AutoRemove":           false,
          "VolumeDriver":         "",
          "VolumesFrom":          null,
          "ConsoleSize":          [
            52,
            114
          ],
          "CapAdd":               null,
          "CapDrop":              null,
          "CgroupnsMode":         "host",
          "Dns":                  [],
          "DnsOptions":           [],
          "DnsSearch":            [],
          "ExtraHosts":           null,
          "GroupAdd":             null,
          "IpcMode":              "private",
          "Cgroup":               "",
          "Links":                null,
          "OomScoreAdj":          0,
          "PidMode":              "",
          "Privileged":           false,
          "PublishAllPorts":      false,
          "ReadonlyRootfs":       false,
          "SecurityOpt":          null,
          "UTSMode":              "",
          "UsernsMode":           "",
          "ShmSize":              67108864,
          "Runtime":              "runc",
          "Isolation":            "",
          "CpuShares":            0,
          "Memory":               0,
          "NanoCpus":             0,
          "CgroupParent":         "",
          "BlkioWeight":          0,
          "BlkioWeightDevice":    [],
          "BlkioDeviceReadBps":   [],
          "BlkioDeviceWriteBps":  [],
          "BlkioDeviceReadIOps":  [],
          "BlkioDeviceWriteIOps": [],
          "CpuPeriod":            0,
          "CpuQuota":             0,
          "CpuRealtimePeriod":    0,
          "CpuRealtimeRuntime":   0,
          "CpusetCpus":           "",
          "CpusetMems":           "",
          "Devices":              [],
          "DeviceCgroupRules":    null,
          "DeviceRequests":       null,
          "MemoryReservation":    0,
          "MemorySwap":           0,
          "MemorySwappiness":     null,
          "OomKillDisable":       false,
          "PidsLimit":            null,
          "Ulimits":              null,
          "CpuCount":             0,
          "CpuPercent":           0,
          "IOMaximumIOps":        0,
          "IOMaximumBandwidth":   0,
          "MaskedPaths":          [
            "/proc/asound",
            "/proc/acpi",
            "/proc/kcore",
            "/proc/keys",
            "/proc/latency_stats",
            "/proc/timer_list",
            "/proc/timer_stats",
            "/proc/sched_debug",
            "/proc/scsi",
            "/sys/firmware"
          ],
          "ReadonlyPaths":        [
            "/proc/bus",
            "/proc/fs",
            "/proc/irq",
            "/proc/sys",
            "/proc/sysrq-trigger"
          ]
        },
        "SizeRootFs":       -1,
        "SizeRw":           -1,
        "Ports":            {
          "80/tcp": [
            {
              "HostIp":   "0.0.0.0",
              "HostPort": "80"
            },
            {
              "HostIp":   "::",
              "HostPort": "80"
            }
          ]
        },
        "Labels":           {
          "maintainer": "NGINX Docker Maintainers <docker-maint@nginx.com>"
        },
        "State":            "exited",
        "Names":            [
          "unruffled_hawking"
        ],
        "Created":          null,
        "state":            "exited",
        "containerName":    "unruffled_hawking",
        "started":          "",
        "imageName":        "nginx",
        "availableActions": [
          {
            "label":      "Stop",
            "action":     "stopContainer",
            "enabled":    false,
            "icon":       "icon icon-pause",
            "bulkable":   true,
            "bulkAction": "stopContainers"
          },
          {
            "label":      "Start",
            "action":     "startContainer",
            "enabled":    true,
            "icon":       "icon icon-play",
            "bulkable":   true,
            "bulkAction": "startContainer"
          },
          {
            "label":      "Delete",
            "action":     "deleteContainer",
            "enabled":    true,
            "icon":       "icon icon-delete",
            "bulkable":   true,
            "bulkAction": "deleteContainers"
          }
        ]
      },
      {
        "Image":            "sha256:91ca50a8230a48adc19fa0dd2363edfd8c5d8add70f2d10c3a6ce0521f897635",
        "Command":          "\"entrypoint.sh\"",
        "Status":           "Exited (1) 6 days ago",
        "Id":               "f1b520c9bc51bc714340515d3ee0f130e46ca220f0aeb3412456e297c1be5ea5",
        "ImageID":          "sha256:91ca50a8230a48adc19fa0dd2363edfd8c5d8add70f2d10c3a6ce0521f897635",
        "NetworkSettings":  {
          "Bridge":                 "",
          "SandboxID":              "9c0c653391fcc5e89d633e2d43e7badc5887b17489399651293d01e66df2779c",
          "HairpinMode":            false,
          "LinkLocalIPv6Address":   "",
          "LinkLocalIPv6PrefixLen": 0,
          "Ports":                  {},
          "SandboxKey":             "/var/run/docker/netns/9c0c653391fc",
          "SecondaryIPAddresses":   null,
          "SecondaryIPv6Addresses": null,
          "EndpointID":             "",
          "Gateway":                "",
          "GlobalIPv6Address":      "",
          "GlobalIPv6PrefixLen":    0,
          "IPAddress":              "",
          "IPPrefixLen":            0,
          "IPv6Gateway":            "",
          "MacAddress":             "",
          "Networks":               {
            "bridge": {
              "IPAMConfig":          null,
              "Links":               null,
              "Aliases":             null,
              "NetworkID":           "b8ac46923745cfba315fdb26b23f39fb2f99ca40e84e403c80927a20be5b3d09",
              "EndpointID":          "",
              "Gateway":             "",
              "IPAddress":           "",
              "IPPrefixLen":         0,
              "IPv6Gateway":         "",
              "GlobalIPv6Address":   "",
              "GlobalIPv6PrefixLen": 0,
              "MacAddress":          "",
              "DriverOpts":          null
            }
          }
        },
        "Mounts":           [
          {
            "Type":        "volume",
            "Name":        "b2f587bdbed92e946a6307d2cea8ddfcf5ef1d82d220f281b0a4efd6b67649b9",
            "Source":      "/var/lib/docker/volumes/b2f587bdbed92e946a6307d2cea8ddfcf5ef1d82d220f281b0a4efd6b67649b9/_data",
            "Destination": "/var/lib/kubelet",
            "Driver":      "local",
            "Mode":        "",
            "RW":          true,
            "Propagation": ""
          },
          {
            "Type":        "volume",
            "Name":        "860e3a68c4c4c49a8caae8bfe70a2493ed970f036dc1cf9e32d2ddeb078c7f0b",
            "Source":      "/var/lib/docker/volumes/860e3a68c4c4c49a8caae8bfe70a2493ed970f036dc1cf9e32d2ddeb078c7f0b/_data",
            "Destination": "/var/lib/rancher",
            "Driver":      "local",
            "Mode":        "",
            "RW":          true,
            "Propagation": ""
          },
          {
            "Type":        "volume",
            "Name":        "a5abc1c575d5e7777a148f0dcd2c275373614c50f1fd1a935b033dddef95dcc8",
            "Source":      "/var/lib/docker/volumes/a5abc1c575d5e7777a148f0dcd2c275373614c50f1fd1a935b033dddef95dcc8/_data",
            "Destination": "/var/log",
            "Driver":      "local",
            "Mode":        "",
            "RW":          true,
            "Propagation": ""
          },
          {
            "Type":        "volume",
            "Name":        "d6b48384abdfa3d2f24b6758bf3869503e9778b82da9bf374c31202afc8400ab",
            "Source":      "/var/lib/docker/volumes/d6b48384abdfa3d2f24b6758bf3869503e9778b82da9bf374c31202afc8400ab/_data",
            "Destination": "/var/lib/cni",
            "Driver":      "local",
            "Mode":        "",
            "RW":          true,
            "Propagation": ""
          }
        ],
        "HostConfig":       {
          "Binds":                null,
          "ContainerIDFile":      "",
          "LogConfig":            {
            "Type":   "json-file",
            "Config": {}
          },
          "NetworkMode":          "default",
          "PortBindings":         {
            "120/tcp":  [
              {
                "HostIp":   "",
                "HostPort": "2444"
              }
            ],
            "422/tcp":  [
              {
                "HostIp":   "",
                "HostPort": "12337"
              }
            ],
            "4431/tcp": [
              {
                "HostIp":   "",
                "HostPort": "44321"
              }
            ],
            "810/tcp":  [
              {
                "HostIp":   "",
                "HostPort": "8021"
              }
            ]
          },
          "RestartPolicy":        {
            "Name":              "unless-stopped",
            "MaximumRetryCount": 0
          },
          "AutoRemove":           false,
          "VolumeDriver":         "",
          "VolumesFrom":          null,
          "ConsoleSize":          [
            23,
            114
          ],
          "CapAdd":               null,
          "CapDrop":              null,
          "CgroupnsMode":         "host",
          "Dns":                  [],
          "DnsOptions":           [],
          "DnsSearch":            [],
          "ExtraHosts":           null,
          "GroupAdd":             null,
          "IpcMode":              "private",
          "Cgroup":               "",
          "Links":                null,
          "OomScoreAdj":          0,
          "PidMode":              "",
          "Privileged":           true,
          "PublishAllPorts":      false,
          "ReadonlyRootfs":       false,
          "SecurityOpt":          [
            "label=disable"
          ],
          "UTSMode":              "",
          "UsernsMode":           "",
          "ShmSize":              67108864,
          "Runtime":              "runc",
          "Isolation":            "",
          "CpuShares":            0,
          "Memory":               0,
          "NanoCpus":             0,
          "CgroupParent":         "",
          "BlkioWeight":          0,
          "BlkioWeightDevice":    [],
          "BlkioDeviceReadBps":   [],
          "BlkioDeviceWriteBps":  [],
          "BlkioDeviceReadIOps":  [],
          "BlkioDeviceWriteIOps": [],
          "CpuPeriod":            0,
          "CpuQuota":             0,
          "CpuRealtimePeriod":    0,
          "CpuRealtimeRuntime":   0,
          "CpusetCpus":           "",
          "CpusetMems":           "",
          "Devices":              [],
          "DeviceCgroupRules":    null,
          "DeviceRequests":       null,
          "MemoryReservation":    0,
          "MemorySwap":           0,
          "MemorySwappiness":     null,
          "OomKillDisable":       false,
          "PidsLimit":            null,
          "Ulimits":              null,
          "CpuCount":             0,
          "CpuPercent":           0,
          "IOMaximumIOps":        0,
          "IOMaximumBandwidth":   0,
          "MaskedPaths":          null,
          "ReadonlyPaths":        null
        },
        "SizeRootFs":       -1,
        "SizeRw":           -1,
        "Ports":            {},
        "Labels":           {
          "com.suse.bci.base.created":            "2023-07-20T17:55:40.320824200Z",
          "com.suse.bci.base.description":        "Image for containers based on SUSE Linux Enterprise Server 15 SP5.",
          "com.suse.bci.base.disturl":            "obs://build.suse.de/SUSE:SLE-15-SP5:Update:CR/images/0398c4a9e6e93d335a0da6ba3b1cc9e8-sles15-image",
          "com.suse.bci.base.eula":               "sle-bci",
          "com.suse.bci.base.image-type":         "sle-bci",
          "com.suse.bci.base.lifecycle-url":      "https://www.suse.com/lifecycle",
          "com.suse.bci.base.reference":          "registry.suse.com/suse/sle15:15.5.36.5.18",
          "com.suse.bci.base.release-stage":      "released",
          "com.suse.bci.base.source":             "https://sources.suse.com/SUSE:SLE-15-SP5:Update:CR/sles15-image/0398c4a9e6e93d335a0da6ba3b1cc9e8/",
          "com.suse.bci.base.supportlevel":       "l3",
          "com.suse.bci.base.title":              "SLE BCI 15 SP5 Base Container Image",
          "com.suse.bci.base.url":                "https://www.suse.com/products/server/",
          "com.suse.bci.base.vendor":             "SUSE LLC",
          "com.suse.bci.base.version":            "15.5.36.5.18",
          "com.suse.eula":                        "sle-bci",
          "com.suse.image-type":                  "sle-bci",
          "com.suse.lifecycle-url":               "https://www.suse.com/lifecycle",
          "com.suse.release-stage":               "released",
          "com.suse.sle.base.created":            "2023-07-20T17:55:40.320824200Z",
          "com.suse.sle.base.description":        "Image for containers based on SUSE Linux Enterprise Server 15 SP5.",
          "com.suse.sle.base.disturl":            "obs://build.suse.de/SUSE:SLE-15-SP5:Update:CR/images/0398c4a9e6e93d335a0da6ba3b1cc9e8-sles15-image",
          "com.suse.sle.base.eula":               "sle-bci",
          "com.suse.sle.base.image-type":         "sle-bci",
          "com.suse.sle.base.lifecycle-url":      "https://www.suse.com/lifecycle",
          "com.suse.sle.base.reference":          "registry.suse.com/suse/sle15:15.5.36.5.18",
          "com.suse.sle.base.release-stage":      "released",
          "com.suse.sle.base.source":             "https://sources.suse.com/SUSE:SLE-15-SP5:Update:CR/sles15-image/0398c4a9e6e93d335a0da6ba3b1cc9e8/",
          "com.suse.sle.base.supportlevel":       "l3",
          "com.suse.sle.base.title":              "SLE BCI 15 SP5 Base Container Image",
          "com.suse.sle.base.url":                "https://www.suse.com/products/server/",
          "com.suse.sle.base.vendor":             "SUSE LLC",
          "com.suse.sle.base.version":            "15.5.36.5.18",
          "com.suse.supportlevel":                "l3",
          "org.openbuildservice.disturl":         "obs://build.suse.de/SUSE:SLE-15-SP5:Update:CR/images/0398c4a9e6e93d335a0da6ba3b1cc9e8-sles15-image",
          "org.opencontainers.image.created":     "2023-07-24T09:11:05Z",
          "org.opencontainers.image.description": "Image for containers based on SUSE Linux Enterprise Server 15 SP5.",
          "org.opencontainers.image.revision":    "39c4c345bcfba5eec8582012629c82917c8eb050",
          "org.opencontainers.image.source":      "https://github.com/rancher/rancher.git",
          "org.opencontainers.image.title":       "SLE BCI 15 SP5 Base Container Image",
          "org.opencontainers.image.url":         "https://github.com/rancher/rancher",
          "org.opencontainers.image.vendor":      "SUSE LLC",
          "org.opencontainers.image.version":     "15.5.36.5.18",
          "org.opensuse.reference":               "registry.suse.com/suse/sle15:15.5.36.5.18"
        },
        "State":            "exited",
        "Names":            [
          "container-5"
        ],
        "Created":          null,
        "state":            "exited",
        "containerName":    "container-5",
        "started":          "",
        "imageName":        "sha256:91ca50a8230a48adc19fa0dd2363edfd8c5d8add70f2d10c3a6ce0521f897635",
        "availableActions": [
          {
            "label":      "Stop",
            "action":     "stopContainer",
            "enabled":    false,
            "icon":       "icon icon-pause",
            "bulkable":   true,
            "bulkAction": "stopContainers"
          },
          {
            "label":      "Start",
            "action":     "startContainer",
            "enabled":    true,
            "icon":       "icon icon-play",
            "bulkable":   true,
            "bulkAction": "startContainer"
          },
          {
            "label":      "Delete",
            "action":     "deleteContainer",
            "enabled":    true,
            "icon":       "icon icon-delete",
            "bulkable":   true,
            "bulkAction": "deleteContainers"
          }
        ]
      },
      {
        "Image":            "sha256:91ca50a8230a48adc19fa0dd2363edfd8c5d8add70f2d10c3a6ce0521f897635",
        "Command":          "\"entrypoint.sh\"",
        "Status":           "Exited (137) 2 months ago",
        "Id":               "f8a74cc242f9a1dc5cc173629578d7e866f611cd446679b82a86ebf988bdc74c",
        "ImageID":          "sha256:91ca50a8230a48adc19fa0dd2363edfd8c5d8add70f2d10c3a6ce0521f897635",
        "NetworkSettings":  {
          "Bridge":                 "",
          "SandboxID":              "bf61f7db6845918c9289343b48f4774042d1f6566f598cda00273c5d77bdc69f",
          "HairpinMode":            false,
          "LinkLocalIPv6Address":   "",
          "LinkLocalIPv6PrefixLen": 0,
          "Ports":                  {},
          "SandboxKey":             "/var/run/docker/netns/bf61f7db6845",
          "SecondaryIPAddresses":   null,
          "SecondaryIPv6Addresses": null,
          "EndpointID":             "",
          "Gateway":                "",
          "GlobalIPv6Address":      "",
          "GlobalIPv6PrefixLen":    0,
          "IPAddress":              "",
          "IPPrefixLen":            0,
          "IPv6Gateway":            "",
          "MacAddress":             "",
          "Networks":               {
            "bridge": {
              "IPAMConfig":          null,
              "Links":               null,
              "Aliases":             null,
              "NetworkID":           "15ded2f1d2992125aeac08c79d8f72129a179a47ad52d28a70b38bebc2dfc66c",
              "EndpointID":          "",
              "Gateway":             "",
              "IPAddress":           "",
              "IPPrefixLen":         0,
              "IPv6Gateway":         "",
              "GlobalIPv6Address":   "",
              "GlobalIPv6PrefixLen": 0,
              "MacAddress":          "",
              "DriverOpts":          null
            }
          }
        },
        "Mounts":           [
          {
            "Type":        "volume",
            "Name":        "1b8ac29e8983430235a073375dd2da8e55c159f2aafbbcad3478bc25e8b0008b",
            "Source":      "/var/lib/docker/volumes/1b8ac29e8983430235a073375dd2da8e55c159f2aafbbcad3478bc25e8b0008b/_data",
            "Destination": "/var/lib/cni",
            "Driver":      "local",
            "Mode":        "",
            "RW":          true,
            "Propagation": ""
          },
          {
            "Type":        "volume",
            "Name":        "90ec4ca98a22ecda7afecb2b3c5af9d3ca62bf3ef44b535ce11cef4fe1db2fad",
            "Source":      "/var/lib/docker/volumes/90ec4ca98a22ecda7afecb2b3c5af9d3ca62bf3ef44b535ce11cef4fe1db2fad/_data",
            "Destination": "/var/lib/kubelet",
            "Driver":      "local",
            "Mode":        "",
            "RW":          true,
            "Propagation": ""
          },
          {
            "Type":        "volume",
            "Name":        "dfd53f578cc690d352efd1d361fd1d5308bbe00dd7aa74fffe2004a16cab06ce",
            "Source":      "/var/lib/docker/volumes/dfd53f578cc690d352efd1d361fd1d5308bbe00dd7aa74fffe2004a16cab06ce/_data",
            "Destination": "/var/lib/rancher",
            "Driver":      "local",
            "Mode":        "",
            "RW":          true,
            "Propagation": ""
          },
          {
            "Type":        "volume",
            "Name":        "6b94ddbaa3458b54d750e3a67295224213018b0380c0567ab2aa06160ebf6acf",
            "Source":      "/var/lib/docker/volumes/6b94ddbaa3458b54d750e3a67295224213018b0380c0567ab2aa06160ebf6acf/_data",
            "Destination": "/var/log",
            "Driver":      "local",
            "Mode":        "",
            "RW":          true,
            "Propagation": ""
          }
        ],
        "HostConfig":       {
          "Binds":                null,
          "ContainerIDFile":      "",
          "LogConfig":            {
            "Type":   "json-file",
            "Config": {}
          },
          "NetworkMode":          "default",
          "PortBindings":         {
            "443/tcp": [
              {
                "HostIp":   "",
                "HostPort": "443"
              }
            ],
            "80/tcp":  [
              {
                "HostIp":   "",
                "HostPort": "80"
              },
              {
                "HostIp":   "",
                "HostPort": "1337"
              },
              {
                "HostIp":   "",
                "HostPort": "1444"
              }
            ]
          },
          "RestartPolicy":        {
            "Name":              "unless-stopped",
            "MaximumRetryCount": 0
          },
          "AutoRemove":           false,
          "VolumeDriver":         "",
          "VolumesFrom":          null,
          "ConsoleSize":          [
            23,
            114
          ],
          "CapAdd":               null,
          "CapDrop":              null,
          "CgroupnsMode":         "host",
          "Dns":                  [],
          "DnsOptions":           [],
          "DnsSearch":            [],
          "ExtraHosts":           null,
          "GroupAdd":             null,
          "IpcMode":              "private",
          "Cgroup":               "",
          "Links":                null,
          "OomScoreAdj":          0,
          "PidMode":              "",
          "Privileged":           true,
          "PublishAllPorts":      false,
          "ReadonlyRootfs":       false,
          "SecurityOpt":          [
            "label=disable"
          ],
          "UTSMode":              "",
          "UsernsMode":           "",
          "ShmSize":              67108864,
          "Runtime":              "runc",
          "Isolation":            "",
          "CpuShares":            0,
          "Memory":               0,
          "NanoCpus":             0,
          "CgroupParent":         "",
          "BlkioWeight":          0,
          "BlkioWeightDevice":    [],
          "BlkioDeviceReadBps":   [],
          "BlkioDeviceWriteBps":  [],
          "BlkioDeviceReadIOps":  [],
          "BlkioDeviceWriteIOps": [],
          "CpuPeriod":            0,
          "CpuQuota":             0,
          "CpuRealtimePeriod":    0,
          "CpuRealtimeRuntime":   0,
          "CpusetCpus":           "",
          "CpusetMems":           "",
          "Devices":              [],
          "DeviceCgroupRules":    null,
          "DeviceRequests":       null,
          "MemoryReservation":    0,
          "MemorySwap":           0,
          "MemorySwappiness":     null,
          "OomKillDisable":       false,
          "PidsLimit":            null,
          "Ulimits":              null,
          "CpuCount":             0,
          "CpuPercent":           0,
          "IOMaximumIOps":        0,
          "IOMaximumBandwidth":   0,
          "MaskedPaths":          null,
          "ReadonlyPaths":        null
        },
        "SizeRootFs":       -1,
        "SizeRw":           -1,
        "Ports":            {},
        "Labels":           {
          "com.suse.bci.base.created":            "2023-07-20T17:55:40.320824200Z",
          "com.suse.bci.base.description":        "Image for containers based on SUSE Linux Enterprise Server 15 SP5.",
          "com.suse.bci.base.disturl":            "obs://build.suse.de/SUSE:SLE-15-SP5:Update:CR/images/0398c4a9e6e93d335a0da6ba3b1cc9e8-sles15-image",
          "com.suse.bci.base.eula":               "sle-bci",
          "com.suse.bci.base.image-type":         "sle-bci",
          "com.suse.bci.base.lifecycle-url":      "https://www.suse.com/lifecycle",
          "com.suse.bci.base.reference":          "registry.suse.com/suse/sle15:15.5.36.5.18",
          "com.suse.bci.base.release-stage":      "released",
          "com.suse.bci.base.source":             "https://sources.suse.com/SUSE:SLE-15-SP5:Update:CR/sles15-image/0398c4a9e6e93d335a0da6ba3b1cc9e8/",
          "com.suse.bci.base.supportlevel":       "l3",
          "com.suse.bci.base.title":              "SLE BCI 15 SP5 Base Container Image",
          "com.suse.bci.base.url":                "https://www.suse.com/products/server/",
          "com.suse.bci.base.vendor":             "SUSE LLC",
          "com.suse.bci.base.version":            "15.5.36.5.18",
          "com.suse.eula":                        "sle-bci",
          "com.suse.image-type":                  "sle-bci",
          "com.suse.lifecycle-url":               "https://www.suse.com/lifecycle",
          "com.suse.release-stage":               "released",
          "com.suse.sle.base.created":            "2023-07-20T17:55:40.320824200Z",
          "com.suse.sle.base.description":        "Image for containers based on SUSE Linux Enterprise Server 15 SP5.",
          "com.suse.sle.base.disturl":            "obs://build.suse.de/SUSE:SLE-15-SP5:Update:CR/images/0398c4a9e6e93d335a0da6ba3b1cc9e8-sles15-image",
          "com.suse.sle.base.eula":               "sle-bci",
          "com.suse.sle.base.image-type":         "sle-bci",
          "com.suse.sle.base.lifecycle-url":      "https://www.suse.com/lifecycle",
          "com.suse.sle.base.reference":          "registry.suse.com/suse/sle15:15.5.36.5.18",
          "com.suse.sle.base.release-stage":      "released",
          "com.suse.sle.base.source":             "https://sources.suse.com/SUSE:SLE-15-SP5:Update:CR/sles15-image/0398c4a9e6e93d335a0da6ba3b1cc9e8/",
          "com.suse.sle.base.supportlevel":       "l3",
          "com.suse.sle.base.title":              "SLE BCI 15 SP5 Base Container Image",
          "com.suse.sle.base.url":                "https://www.suse.com/products/server/",
          "com.suse.sle.base.vendor":             "SUSE LLC",
          "com.suse.sle.base.version":            "15.5.36.5.18",
          "com.suse.supportlevel":                "l3",
          "org.openbuildservice.disturl":         "obs://build.suse.de/SUSE:SLE-15-SP5:Update:CR/images/0398c4a9e6e93d335a0da6ba3b1cc9e8-sles15-image",
          "org.opencontainers.image.created":     "2023-07-24T09:11:05Z",
          "org.opencontainers.image.description": "Image for containers based on SUSE Linux Enterprise Server 15 SP5.",
          "org.opencontainers.image.revision":    "39c4c345bcfba5eec8582012629c82917c8eb050",
          "org.opencontainers.image.source":      "https://github.com/rancher/rancher.git",
          "org.opencontainers.image.title":       "SLE BCI 15 SP5 Base Container Image",
          "org.opencontainers.image.url":         "https://github.com/rancher/rancher",
          "org.opencontainers.image.vendor":      "SUSE LLC",
          "org.opencontainers.image.version":     "15.5.36.5.18",
          "org.opensuse.reference":               "registry.suse.com/suse/sle15:15.5.36.5.18"
        },
        "State":            "exited",
        "Names":            [
          "container"
        ],
        "Created":          null,
        "state":            "exited",
        "containerName":    "container",
        "started":          "",
        "imageName":        "sha256:91ca50a8230a48adc19fa0dd2363edfd8c5d8add70f2d10c3a6ce0521f897635",
        "availableActions": [
          {
            "label":      "Stop",
            "action":     "stopContainer",
            "enabled":    false,
            "icon":       "icon icon-pause",
            "bulkable":   true,
            "bulkAction": "stopContainers"
          },
          {
            "label":      "Start",
            "action":     "startContainer",
            "enabled":    true,
            "icon":       "icon icon-play",
            "bulkable":   true,
            "bulkAction": "startContainer"
          },
          {
            "label":      "Delete",
            "action":     "deleteContainer",
            "enabled":    true,
            "icon":       "icon icon-delete",
            "bulkable":   true,
            "bulkAction": "deleteContainers"
          }
        ]
      },
      {
        "Image":            "sha256:91ca50a8230a48adc19fa0dd2363edfd8c5d8add70f2d10c3a6ce0521f897635",
        "Command":          "\"entrypoint.sh\"",
        "Status":           "Exited (1) 2 months ago",
        "Id":               "744988e77a27ea2ecb6b65028c3a24c6a6fb5864c6b73e59ef097053c593502c",
        "ImageID":          "sha256:91ca50a8230a48adc19fa0dd2363edfd8c5d8add70f2d10c3a6ce0521f897635",
        "NetworkSettings":  {
          "Bridge":                 "",
          "SandboxID":              "6e96ecf1dd5eb57c2515ec9012580a9f071220a09b48499e078aa45f1106e9cf",
          "HairpinMode":            false,
          "LinkLocalIPv6Address":   "",
          "LinkLocalIPv6PrefixLen": 0,
          "Ports":                  {},
          "SandboxKey":             "/var/run/docker/netns/6e96ecf1dd5e",
          "SecondaryIPAddresses":   null,
          "SecondaryIPv6Addresses": null,
          "EndpointID":             "",
          "Gateway":                "",
          "GlobalIPv6Address":      "",
          "GlobalIPv6PrefixLen":    0,
          "IPAddress":              "",
          "IPPrefixLen":            0,
          "IPv6Gateway":            "",
          "MacAddress":             "",
          "Networks":               {
            "bridge": {
              "IPAMConfig":          null,
              "Links":               null,
              "Aliases":             null,
              "NetworkID":           "15ded2f1d2992125aeac08c79d8f72129a179a47ad52d28a70b38bebc2dfc66c",
              "EndpointID":          "",
              "Gateway":             "",
              "IPAddress":           "",
              "IPPrefixLen":         0,
              "IPv6Gateway":         "",
              "GlobalIPv6Address":   "",
              "GlobalIPv6PrefixLen": 0,
              "MacAddress":          "",
              "DriverOpts":          null
            }
          }
        },
        "Mounts":           [
          {
            "Type":        "volume",
            "Name":        "040ce894c1e8851a43b963e28bcfe59f7679906859a58308057e3d07af837993",
            "Source":      "/var/lib/docker/volumes/040ce894c1e8851a43b963e28bcfe59f7679906859a58308057e3d07af837993/_data",
            "Destination": "/var/lib/cni",
            "Driver":      "local",
            "Mode":        "",
            "RW":          true,
            "Propagation": ""
          },
          {
            "Type":        "volume",
            "Name":        "0a04fff114e49d91843ad25f2ca3c82c307a63c476fd4880b4305c2252bb24f4",
            "Source":      "/var/lib/docker/volumes/0a04fff114e49d91843ad25f2ca3c82c307a63c476fd4880b4305c2252bb24f4/_data",
            "Destination": "/var/lib/kubelet",
            "Driver":      "local",
            "Mode":        "",
            "RW":          true,
            "Propagation": ""
          },
          {
            "Type":        "volume",
            "Name":        "35f2983924202ef696b959d1bac35b178fe4bf71e83bbaffbb697892e3f89930",
            "Source":      "/var/lib/docker/volumes/35f2983924202ef696b959d1bac35b178fe4bf71e83bbaffbb697892e3f89930/_data",
            "Destination": "/var/lib/rancher",
            "Driver":      "local",
            "Mode":        "",
            "RW":          true,
            "Propagation": ""
          },
          {
            "Type":        "volume",
            "Name":        "cbca5b00b5e0c2e7076aa2bf37c4ac617df8b50af93c6e00af6d64c2b041702b",
            "Source":      "/var/lib/docker/volumes/cbca5b00b5e0c2e7076aa2bf37c4ac617df8b50af93c6e00af6d64c2b041702b/_data",
            "Destination": "/var/log",
            "Driver":      "local",
            "Mode":        "",
            "RW":          true,
            "Propagation": ""
          }
        ],
        "HostConfig":       {
          "Binds":                null,
          "ContainerIDFile":      "",
          "LogConfig":            {
            "Type":   "json-file",
            "Config": {}
          },
          "NetworkMode":          "default",
          "PortBindings":         {
            "443/tcp": [
              {
                "HostIp":   "",
                "HostPort": "443"
              }
            ],
            "80/tcp":  [
              {
                "HostIp":   "",
                "HostPort": "80"
              }
            ]
          },
          "RestartPolicy":        {
            "Name":              "unless-stopped",
            "MaximumRetryCount": 0
          },
          "AutoRemove":           false,
          "VolumeDriver":         "",
          "VolumesFrom":          null,
          "ConsoleSize":          [
            44,
            99
          ],
          "CapAdd":               null,
          "CapDrop":              null,
          "CgroupnsMode":         "host",
          "Dns":                  [],
          "DnsOptions":           [],
          "DnsSearch":            [],
          "ExtraHosts":           null,
          "GroupAdd":             null,
          "IpcMode":              "private",
          "Cgroup":               "",
          "Links":                null,
          "OomScoreAdj":          0,
          "PidMode":              "",
          "Privileged":           true,
          "PublishAllPorts":      false,
          "ReadonlyRootfs":       false,
          "SecurityOpt":          [
            "label=disable"
          ],
          "UTSMode":              "",
          "UsernsMode":           "",
          "ShmSize":              67108864,
          "Runtime":              "runc",
          "Isolation":            "",
          "CpuShares":            0,
          "Memory":               0,
          "NanoCpus":             0,
          "CgroupParent":         "",
          "BlkioWeight":          0,
          "BlkioWeightDevice":    [],
          "BlkioDeviceReadBps":   [],
          "BlkioDeviceWriteBps":  [],
          "BlkioDeviceReadIOps":  [],
          "BlkioDeviceWriteIOps": [],
          "CpuPeriod":            0,
          "CpuQuota":             0,
          "CpuRealtimePeriod":    0,
          "CpuRealtimeRuntime":   0,
          "CpusetCpus":           "",
          "CpusetMems":           "",
          "Devices":              [],
          "DeviceCgroupRules":    null,
          "DeviceRequests":       null,
          "MemoryReservation":    0,
          "MemorySwap":           0,
          "MemorySwappiness":     null,
          "OomKillDisable":       false,
          "PidsLimit":            null,
          "Ulimits":              null,
          "CpuCount":             0,
          "CpuPercent":           0,
          "IOMaximumIOps":        0,
          "IOMaximumBandwidth":   0,
          "MaskedPaths":          null,
          "ReadonlyPaths":        null
        },
        "SizeRootFs":       -1,
        "SizeRw":           -1,
        "Ports":            {},
        "Labels":           {
          "com.suse.bci.base.created":            "2023-07-20T17:55:40.320824200Z",
          "com.suse.bci.base.description":        "Image for containers based on SUSE Linux Enterprise Server 15 SP5.",
          "com.suse.bci.base.disturl":            "obs://build.suse.de/SUSE:SLE-15-SP5:Update:CR/images/0398c4a9e6e93d335a0da6ba3b1cc9e8-sles15-image",
          "com.suse.bci.base.eula":               "sle-bci",
          "com.suse.bci.base.image-type":         "sle-bci",
          "com.suse.bci.base.lifecycle-url":      "https://www.suse.com/lifecycle",
          "com.suse.bci.base.reference":          "registry.suse.com/suse/sle15:15.5.36.5.18",
          "com.suse.bci.base.release-stage":      "released",
          "com.suse.bci.base.source":             "https://sources.suse.com/SUSE:SLE-15-SP5:Update:CR/sles15-image/0398c4a9e6e93d335a0da6ba3b1cc9e8/",
          "com.suse.bci.base.supportlevel":       "l3",
          "com.suse.bci.base.title":              "SLE BCI 15 SP5 Base Container Image",
          "com.suse.bci.base.url":                "https://www.suse.com/products/server/",
          "com.suse.bci.base.vendor":             "SUSE LLC",
          "com.suse.bci.base.version":            "15.5.36.5.18",
          "com.suse.eula":                        "sle-bci",
          "com.suse.image-type":                  "sle-bci",
          "com.suse.lifecycle-url":               "https://www.suse.com/lifecycle",
          "com.suse.release-stage":               "released",
          "com.suse.sle.base.created":            "2023-07-20T17:55:40.320824200Z",
          "com.suse.sle.base.description":        "Image for containers based on SUSE Linux Enterprise Server 15 SP5.",
          "com.suse.sle.base.disturl":            "obs://build.suse.de/SUSE:SLE-15-SP5:Update:CR/images/0398c4a9e6e93d335a0da6ba3b1cc9e8-sles15-image",
          "com.suse.sle.base.eula":               "sle-bci",
          "com.suse.sle.base.image-type":         "sle-bci",
          "com.suse.sle.base.lifecycle-url":      "https://www.suse.com/lifecycle",
          "com.suse.sle.base.reference":          "registry.suse.com/suse/sle15:15.5.36.5.18",
          "com.suse.sle.base.release-stage":      "released",
          "com.suse.sle.base.source":             "https://sources.suse.com/SUSE:SLE-15-SP5:Update:CR/sles15-image/0398c4a9e6e93d335a0da6ba3b1cc9e8/",
          "com.suse.sle.base.supportlevel":       "l3",
          "com.suse.sle.base.title":              "SLE BCI 15 SP5 Base Container Image",
          "com.suse.sle.base.url":                "https://www.suse.com/products/server/",
          "com.suse.sle.base.vendor":             "SUSE LLC",
          "com.suse.sle.base.version":            "15.5.36.5.18",
          "com.suse.supportlevel":                "l3",
          "org.openbuildservice.disturl":         "obs://build.suse.de/SUSE:SLE-15-SP5:Update:CR/images/0398c4a9e6e93d335a0da6ba3b1cc9e8-sles15-image",
          "org.opencontainers.image.created":     "2023-07-24T09:11:05Z",
          "org.opencontainers.image.description": "Image for containers based on SUSE Linux Enterprise Server 15 SP5.",
          "org.opencontainers.image.revision":    "39c4c345bcfba5eec8582012629c82917c8eb050",
          "org.opencontainers.image.source":      "https://github.com/rancher/rancher.git",
          "org.opencontainers.image.title":       "SLE BCI 15 SP5 Base Container Image",
          "org.opencontainers.image.url":         "https://github.com/rancher/rancher",
          "org.opencontainers.image.vendor":      "SUSE LLC",
          "org.opencontainers.image.version":     "15.5.36.5.18",
          "org.opensuse.reference":               "registry.suse.com/suse/sle15:15.5.36.5.18"
        },
        "State":            "exited",
        "Names":            [
          "login-test"
        ],
        "Created":          null,
        "state":            "exited",
        "containerName":    "login-test",
        "started":          "",
        "imageName":        "sha256:91ca50a8230a48adc19fa0dd2363edfd8c5d8add70f2d10c3a6ce0521f897635",
        "availableActions": [
          {
            "label":      "Stop",
            "action":     "stopContainer",
            "enabled":    false,
            "icon":       "icon icon-pause",
            "bulkable":   true,
            "bulkAction": "stopContainers"
          },
          {
            "label":      "Start",
            "action":     "startContainer",
            "enabled":    true,
            "icon":       "icon icon-play",
            "bulkable":   true,
            "bulkAction": "startContainer"
          },
          {
            "label":      "Delete",
            "action":     "deleteContainer",
            "enabled":    true,
            "icon":       "icon icon-delete",
            "bulkable":   true,
            "bulkAction": "deleteContainers"
          },
        ],
      },
    ]
  );
});
