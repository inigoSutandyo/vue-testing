<script lang="ts" setup>
import TextField from "../../components/ui/TextField.vue";
import Button from "../../components/ui/Button.vue";
import { nextTick, Ref, ref } from "vue";
import { twMerge } from "tailwind-merge";
type ChatUser = {
  id: number;
  name: string;
  desc: string;
};

type Message = {
  content: string;
  datetime?: Date;
};

const arr: Array<ChatUser> = [
  { id: 1, name: "Sammy", desc: "Designer number 1" },
  { id: 2, name: "Jonny", desc: "Designer number 2" },
  { id: 3, name: "Budi", desc: "Friend" },
  { id: 4, name: "Donny", desc: "Developer" },
];

const messageInput = ref("");
const messages: Ref<Array<Message>> = ref([]);
const selected: Ref<ChatUser | undefined> = ref(undefined);
const bottomEl : Ref<HTMLDivElement | null> = ref(null);


const submitMessage = async () => {
  const str = messageInput.value.trim();
  if (str) {
    messages.value = [
      ...messages.value,
      {
        content: str,
        datetime: new Date(),
      },
    ];
    messageInput.value = "";
    await nextTick()
    bottomEl.value?.scrollIntoView({ block: 'end',  behavior: 'smooth' })
  }
};


</script>
<template>
  <div class="w-full flex flex-row bg-slate-400 rounded-3xl p-4 gap-4">
    <div class="flex flex-col w-[40%] gap-2">
      <div
        class="rounded-3xl relative h-20 w-full flex items-center overflow-hidden"
      >
        <TextField
          class="absolute left-0 w-full rounded-3xl"
          place-holder="Search Something Exciting"
        />
        <Button
          class="hover:scale-100 bg-none border rounded-s-none rounded-e-3xl border-gray-500 hover:bg-blue-500 absolute right-0"
        >
          <i class="pi pi-search"></i>
        </Button>
      </div>
      <div
        v-for="a in arr"
        :key="a.id"
        :class="
          twMerge(
            `w-full rounded-lg px-2 py-4 flex flex-row gap-4 hover:bg-blue-300 transition-colors ease-linear duration-150 cursor-pointer`,
            a.id === selected?.id ? 'bg-blue-200' : 'bg-white'
          )
        "
        @click="selected = a"
      >
        <img
          src="https://picsum.photos/400/400"
          class="rounded-[50%] w-12 h-12 object-cover"
        />
        <div class="flex flex-col flex-1 overflow-hidden">
          <h4 class="font-semibold text-lg">{{ a.name }}</h4>
          <p class="truncate text-black/40">
            {{ a.desc }} | Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eligendi nostrum fuga officiis, ratione dolorum maiores unde
            possimus omnis asperiores quod, culpa sit, at a. Libero eaque dolore
            ipsa suscipit sed.
          </p>
        </div>
      </div>
    </div>
    <div
      v-if="selected !== undefined"
      class="w-full bg-white rounded-3xl flex flex-col overflow-hidden"
    >
      <div
        class="border-b border-gray-500/50 bg-blue-500 text-white p-2 flex flex-row gap-2 items-center shadow-md"
      >
        <img
          src="https://picsum.photos/400/400"
          class="rounded-[50%] w-14 h-14 object-cover"
        />
        <h4 class="font-semibold text-xl">{{ selected.name }}</h4>
      </div>
      <div
        class="flex flex-col pb-6 pt-4 px-4 w-full gap-2 h-[20rem] overflow-y-auto relative"
      >
        <div
          v-for="i in [1, 2, 3]"
          :key="i"
          :class="
            twMerge(
              `w-full flex flex-row`,
              i % 2 === 1 ? `justify-start` : `justify-end`
            )
          "
        >
          <div
            v-if="i % 2 === 1"
            class="p-2 bg-slate-400 max-w-72 text-white rounded-2xl rounded-tl-none"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            dolorum minima accusantium magnam hic, amet blanditiis itaque
            nesciunt illum perspiciatis officia vero optio voluptatem reiciendis
            ut totam veniam quia quisquam.
          </div>
          <div
            v-else
            class="p-2 bg-blue-600 max-w-72 text-white rounded-2xl rounded-tr-none"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            dolorum minima accusantium magnam hic, amet blanditiis itaque
            nesciunt illum perspiciatis officia vero optio voluptatem reiciendis
            ut totam veniam quia quisquam.
          </div>
        </div>
        <div
          v-for="(m, i) in messages"
          :key="i"
          class="w-full flex flex-row justify-end"
        >
          <div
            class="p-2 bg-blue-600 max-w-72 text-white rounded-2xl rounded-tr-none"
          >
           {{ m.content }}
          </div>
        </div>
        <div ref="bottomEl"></div>
      </div>
      <div
        class="rounded-3xl h-12 w-full flex items-center overflow-hidden px-6"
      >
        <TextField
          class="rounded-3xl rounded-e-none w-full border border-gray-400"
          place-holder="Type Something Exciting"
          :value="messageInput"
          @change="(e: Event) => {
            const val = (e.target as HTMLInputElement).value;
            messageInput = val;
          }"
        />
        <Button
          class="hover:scale-100 bg-none border rounded-s-none rounded-e-3xl border-gray-500 hover:bg-blue-500 right-0"
          @click="submitMessage"
        >
          <i class="pi pi-send"></i>
        </Button>
      </div>
    </div>
    <div v-else class="p-4 h-full w-full text-center">
      <span class="text-xl text-white font-semibold"
        >Please Select a friend...</span
      >
    </div>
  </div>
</template>
